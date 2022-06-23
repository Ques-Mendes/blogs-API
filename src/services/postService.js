const Sequelize = require('sequelize');
const { BlogPost, PostCategory } = require('../database/models');
const config = require('../database/config/config');
const statusErrorHandler = require('../helpers/statusErrorHandler');
const { BAD_REQUEST } = require('../helpers/statusHTTP');

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
    console.log('e', e);
    await t.rollback();  
    statusErrorHandler({ message: '"categoryIds" not found', status: BAD_REQUEST });    
  }
};

module.exports = {
  createPost,
};

// newPost.id, categoryIds
// 1, 1