const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(255),
    }
  }, {
    timestamp: false,
    tableName: 'Categories'
  });
  return CategoryTable;
}
module.exports = CategorySchema;