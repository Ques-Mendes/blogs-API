const userService = require('../services/userService.js');
const { CREATED, STATUS_OK, NO_CONTENT } = require('../helpers/statusHTTP.js');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const token = await userService.createUser({ displayName, email, password, image });
  res.status(CREATED).json({ token });
};

const getAllUsers = async (_req, res) => {  
  const users = await userService.getAllUsers();
  res.status(STATUS_OK).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  res.status(STATUS_OK).json(user);
};

const deleteMe = async (_req, res) => {
  const { id } = res.locals.payload;
  await userService.deleteMe(id);
  res.status(NO_CONTENT).end();
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteMe,
};