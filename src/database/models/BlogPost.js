const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPost', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    title: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    content: DataTypes.STRING(255),
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    published: {
      type: DataTypes.DATE,      
    },
    updated: {
      type: DataTypes.DATE,
    }
  },
  {
    timestamp: false,
    tableName: 'BlogPosts'
  });

  BlogPostTable.associate = (models) => {
    BlogPostTable.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });
  };
  return BlogPostTable;
};

module.exports = BlogPostSchema;