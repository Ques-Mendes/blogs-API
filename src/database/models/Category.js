const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('Category', {
    name: DataTypes.STRING(255),
  },
  {
    timestamp: false,
  });
  return CategoryTable;
}
module.exports = CategorySchema;