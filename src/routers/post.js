const express = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');
const postInfoValidation = require('../middlewares/postInfoValidation');
const postUpdateValidation = require('../middlewares/postUpdateValidation');

const postRouter = express.Router();

postRouter.post('/', authMiddleware, postInfoValidation, postController.createPost);
postRouter.get('/', authMiddleware, postController.getAllPosts);
postRouter.get('/:id', authMiddleware, postController.getPostById);
postRouter.put('/:id', authMiddleware, postUpdateValidation, postController.updatePost);
postRouter.delete('/:id', authMiddleware, postController.deletePost);

module.exports = postRouter;