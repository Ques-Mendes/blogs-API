const { authenticateToken } = require('../helpers/JWTToken');
const statusErrorHandler = require('../helpers/statusErrorHandler');
const { UNAUTHORIZED } = require('../helpers/statusHTTP');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return statusErrorHandler({ message: 'Token not found', status: UNAUTHORIZED });
  }

  const payload = authenticateToken(token);
  if (payload.error) {
    return statusErrorHandler({ message: 'Expired or invalid token', status: UNAUTHORIZED });
  }

  res.locals.payload = payload;
  next();
};

module.exports = authMiddleware;
