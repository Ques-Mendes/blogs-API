const postService = require('../services/postService');
const { CREATED, STATUS_OK, NO_CONTENT } = require('../helpers/statusHTTP');

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

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getPostById(id);
  res.status(STATUS_OK).json(post);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = res.locals.payload;
  const { title, content } = req.body;
  const post = await postService.updatePost(id, userId, { title, content });
  res.status(STATUS_OK).json(post);
};

const deletePost = async (req, res) => {
  const { id: postId } = req.params;
  const { id: userId } = res.locals.payload;
  await postService.deletePost(postId, userId);
  res.status(NO_CONTENT).end();
};

const getPostBySearch = async (req, res) => {
  const { q } = req.query;
  const posts = await postService.getPostBySearch(q);
  res.status(STATUS_OK).json(posts);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  getPostBySearch,
};
