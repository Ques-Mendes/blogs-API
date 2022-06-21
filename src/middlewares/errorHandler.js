const { INTERNAL_ERROR } = require('../helpers/statusHTTP');

const errorHandler = (error, _req, res, _next) => {
  const message = error.message || 'Internal Error';
  res.status(error.status || INTERNAL_ERROR).json({ message });
};

module.exports = errorHandler;