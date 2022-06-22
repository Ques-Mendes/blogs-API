const userService = require('../services/userServicejs');
const { CREATED } = require('../helpers/statusHTTP.js');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const token = await userService.createUser({ displayName, email, password, image });
  res.status(CREATED).json({ token });
};

module.exports = {
  createUser,
};