const express = require('express');
const userController = require('../controllers/userController');
const userInfoValidation = require('../middlewares/userInfoValidation');

const userRouter = express.Router();

userRouter.post('/', userInfoValidation, userController.createUser);

module.exports = userRouter;