const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPosts', {
    title: DataTypes.STRING(255),
    content: DataTypes.STRING(255),
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    timestamp: false,
  },
  {
    timestamp: false,
  });
  return BlogPostTable;
}
module.exports = BlogPostSchema;