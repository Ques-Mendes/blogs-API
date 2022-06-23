const express = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');
const postInfoValidation = require('../middlewares/postInfoValidation');

const postRouter = express.Router();

postRouter.post('/', authMiddleware, postInfoValidation, postController.createPost);

module.exports = postRouter;