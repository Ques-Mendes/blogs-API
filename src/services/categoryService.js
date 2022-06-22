const { Category } = require('../database/models');
const { CONFLICT } = require('../helpers/statusHTTP');
const statusErrorHandler = require('../helpers/statusErrorHandler');

const createCategory = async ({ name }) => {
  const category = await Category.findOne({ 
    attributes: ['name'],
    where: { name },
  });
  if (category) {
    statusErrorHandler({ message: 'Category already registered', status: CONFLICT });
  }
  const newCategory = await Category.create({ name });
  return newCategory; 
};

module.exports = {
  createCategory,
};