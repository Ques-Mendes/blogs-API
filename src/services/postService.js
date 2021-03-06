const Sequelize = require('sequelize');
const { BlogPost, PostCategory, User, Category } = require('../database/models');
const config = require('../database/config/config');
const statusErrorHandler = require('../helpers/statusErrorHandler');
const { BAD_REQUEST, UNAUTHORIZED, NOT_FOUND } = require('../helpers/statusHTTP');

const { Op } = Sequelize;
const sequelize = new Sequelize(config.development);

const arrayIds = (postId, categoryIds) => categoryIds.map((categoryId) => ({ postId, categoryId }));

const createPost = async ({ userId, title, content, categoryIds }) => {
  const t = await sequelize.transaction();
  try {
    const newPost = await BlogPost.create({ title, content, userId }, { transaction: t });
    await PostCategory.bulkCreate(arrayIds(newPost.id, categoryIds), { transaction: t });
    await t.commit();
    return newPost;
  } catch (e) {  
    await t.rollback();  
    statusErrorHandler({ message: '"categoryIds" not found', status: BAD_REQUEST });    
  }
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User,
        as: 'user',
        attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category,
        as: 'categories',
        attributes: ['id', 'name'],
        through: { attributes: [] },
      },
    ],
  });
  return posts;  
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User,
        as: 'user',
        attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category,
        as: 'categories',
        attributes: ['id', 'name'],
        through: { attributes: [] },
      },
    ],
  });
  if (!post) {
    statusErrorHandler({ message: 'Post does not exist', status: NOT_FOUND });  
  }
  return post;
};

const updatePost = async (id, userId, { title, content }) => {
  const selectedPost = await BlogPost.findOne({ where: { id } });
  if (selectedPost.userId === userId) {
   await BlogPost.update({ title, content }, { where: { id } });
    const updatedPost = await getPostById(id);    
    return updatedPost;
  }
  statusErrorHandler({ message: 'Unauthorized user', status: UNAUTHORIZED });
};

const deletePost = async (postId, userId) => {
  const selectedPost = await BlogPost.findOne({ where: { id: postId } });
  if (!selectedPost) {
    statusErrorHandler({ message: 'Post does not exist', status: NOT_FOUND });
  }
  if (selectedPost.userId === userId) {
    const deletedPost = await BlogPost.destroy({ where: { id: postId } });
    return deletedPost;
  }
  statusErrorHandler({ message: 'Unauthorized user', status: UNAUTHORIZED });
};

// https://stackoverflow.com/questions/20695062/sequelize-or-condition-object
// https://stackoverflow.com/questions/53971268/node-sequelize-find-where-like-wildcard
const getPostBySearch = async (q) => {
  const query = `%${q}%`;
  const posts = await BlogPost.findAll({
    where: {
      [Op.or]: [{ title: { [Op.like]: query } }, { content: { [Op.like]: query } }],
    },
    include: [
      { model: User,
       as: 'user',
       attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category,
      as: 'categories',
      attributes: ['id', 'name'],
      through: { attributes: [] },
      },
    ],
  });
  return posts;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  getPostBySearch,
};