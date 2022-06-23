const postService = require('../services/postService');
const { CREATED } = require('../helpers/statusHTTP');

const createPost = async (req, res) => {
  const { id: userId } = res.locals.payload; 
  const { title, content, categoryIds } = req.body;
  const newPost = await postService.createPost({ userId, title, content, categoryIds });
  res.status(CREATED).json(newPost);
};

module.exports = {
  createPost,
};
