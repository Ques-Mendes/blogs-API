const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(255),
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    image: DataTypes.STRING(255),    
  },
  {
    timestamps: false,
    tableName: 'Users'
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.BlogPost, { 
      foreignKey: 'userId',
      as: 'blogpost' 
    });
  };
  return UserTable;
}
module.exports = UserSchema;