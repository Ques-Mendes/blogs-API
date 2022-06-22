const categoryService = require('../services/categoryService');
const { CREATED, STATUS_OK } = require('../helpers/statusHTTP');

const createCategory = async (req, res) => {
  const newCategory = await categoryService.createCategory(req.body);
  res.status(CREATED).json(newCategory);
};

const getAllCategories = async (req, res) => {
  const categories = await categoryService.getAllCategories(req.body);
  res.status(STATUS_OK).json(categories);
};

module.exports = {
  createCategory,
  getAllCategories,
};