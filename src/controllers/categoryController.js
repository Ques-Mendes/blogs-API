const categoryService = require('../services/categoryService');
const { CREATED } = require('../helpers/statusHTTP');

const createCategory = async (req, res) => {
  const newCategory = await categoryService.createCategory(req.body);
  res.status(CREATED).json(newCategory);
};

module.exports = {
  createCategory,
};