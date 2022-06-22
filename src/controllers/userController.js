const userService = require('../services/userServicejs');
const { CREATED, STATUS_OK } = require('../helpers/statusHTTP.js');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const token = await userService.createUser({ displayName, email, password, image });
  res.status(CREATED).json({ token });
};

const getAllUsers = async (_req, res) => {  
  const users = await userService.getAllUsers();
  res.status(STATUS_OK).json(users);
};

module.exports = {
  createUser,
  getAllUsers,
};