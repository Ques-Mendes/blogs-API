const express = require('express');
const userController = require('../controllers/userController');
const userInfoValidation = require('../middlewares/userInfoValidation');
const authMiddleware = require('../middlewares/authMiddleware');

const userRouter = express.Router();

userRouter.post('/', userInfoValidation, userController.createUser);
userRouter.get('/', authMiddleware, userController.getAllUsers);

module.exports = userRouter;