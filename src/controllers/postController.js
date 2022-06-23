const postService = require('../services/postService');
const { CREATED, STATUS_OK } = require('../helpers/statusHTTP');

const createPost = async (req, res) => {
  const { id: userId } = res.locals.payload; 
  const { title, content, categoryIds } = req.body;
  const newPost = await postService.createPost({ userId, title, content, categoryIds });
  res.status(CREATED).json(newPost);
};

const getAllPosts = async (_req, res) => {
  const posts = await postService.getAllPosts();
  res.status(STATUS_OK).json(posts);
};

module.exports = {
  createPost,
  getAllPosts,
};
