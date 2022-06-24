const express = require('express');
const userController = require('../controllers/userController');
const userInfoValidation = require('../middlewares/userInfoValidation');
const authMiddleware = require('../middlewares/authMiddleware');

const userRouter = express.Router();

userRouter.post('/', userInfoValidation, userController.createUser);
userRouter.get('/', authMiddleware, userController.getAllUsers);
userRouter.get('/:id', authMiddleware, userController.getUserById);
userRouter.delete('/me', authMiddleware, userController.deleteMe);

module.exports = userRouter;