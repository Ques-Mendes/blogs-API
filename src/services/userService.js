const { User } = require('../database/models');
const { generateJWTToken } = require('../helpers/JWTToken');
const statusErrorHandler = require('../helpers/statusErrorHandler.js');
const { BAD_REQUEST, CONFLICT, NOT_FOUND } = require('../helpers/statusHTTP');

const getUser = async ({ email, password }) => {
  const user = await User.findOne({
    attributes: ['displayName', 'id', 'email', 'password'],
    where: { email, password },
  });
  if (!user) {
    statusErrorHandler({ message: 'Invalid fields', status: BAD_REQUEST });
  }
  const token = generateJWTToken(user.dataValues);
  return token;
};

const createUser = async ({ displayName, email, password, image }) => {
  const userEmail = await User.findOne({ where: { email } });
  if (!userEmail) {
    const newUser = await User.create({ displayName, email, password, image });
    return generateJWTToken(newUser.dataValues);
  }
    statusErrorHandler({ message: 'User already registered', status: CONFLICT });
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'] });
  return users;
};

const getUserById = async (id) => {
  const user = await User.findOne({ 
    where: { id },
    attributes: ['id', 'displayName', 'email', 'image'] });
  if (!user) {
    statusErrorHandler({ message: 'User does not exist', status: NOT_FOUND });
  }
  return user;
};

module.exports = {
  getUser,
  createUser,
  getAllUsers,
  getUserById,
};