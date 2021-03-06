const express = require('express');
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middlewares/authMiddleware');
const categoryValidation = require('../middlewares/categoryValidation');

const categoryRouter = express.Router();

categoryRouter.post('/', authMiddleware, categoryValidation, categoryController.createCategory);
categoryRouter.get('/', authMiddleware, categoryController.getAllCategories);

module.exports = categoryRouter;