const express = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');
const postInfoValidation = require('../middlewares/postInfoValidation');

const postRouter = express.Router();

postRouter.post('/', authMiddleware, postInfoValidation, postController.createPost);
postRouter.get('/', authMiddleware, postController.getAllPosts);
postRouter.put('/:id', authMiddleware, postController.getPostById);

module.exports = postRouter;