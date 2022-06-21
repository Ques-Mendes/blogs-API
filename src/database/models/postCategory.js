const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define('PostCategory', {
    postId: {
      allowNull: false,
      foreignKey: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      allowNull: false,
      foreignKey: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    }
  }, {
    timestamp: false,
  });

  PostCategoryTable.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Category, {
      as: "categories",
      through: PostCategoryTable,
      foreignKey: "postId",
      otherKey: "categoryId"
    });
    models.Category.belongsToMany(models.BlogPosts, {
      as:"blogPosts",
      through: PostCategoryTable,
      foreignKey: "categoryId",
      otherKey: "postId"
    });
  };
  return PostCategoryTable;
}
module.exports = PostCategorySchema;