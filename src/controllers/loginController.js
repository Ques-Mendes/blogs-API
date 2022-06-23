const userService = require('../services/userService.js');
const { STATUS_OK } = require('../helpers/statusHTTP');

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await userService.getUser({ email, password });
  return res.status(STATUS_OK).json({ token });
};

module.exports = { login };