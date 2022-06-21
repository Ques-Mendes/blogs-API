const express = require('express');
const loginController = require('../controllers/loginController');
const loginValidation = require('../middlewares/loginValidation');

const loginRouter = express.Router();

loginRouter.post('/', loginValidation, loginController.login);

module.exports = loginRouter;