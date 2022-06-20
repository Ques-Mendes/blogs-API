const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    dislayName: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    image: DataTypes.STRING(255),    
  },
  {
    timestamp: false,
  });
  return UserTable;
}
module.exports = UserSchema;