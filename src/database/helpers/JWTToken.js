const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = { algorithm: 'HS256' } || 'jsaldjfjsdnfodsandvkldmnsdmsajasnfdan';

const generateJWTToken = (payload) => jwt.sign(payload, SECRET, jwtConfig);

const authenticateToken = (token) => {
  try {
    const introspection = jwt.verify(token, SECRET, jwtConfig);
    return introspection;
  } catch (e) {
    return { error: true, e };
  }
};

module.exports = {
  generateJWTToken,
  authenticateToken,
};