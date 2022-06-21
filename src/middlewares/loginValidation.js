const Joi = require('joi');
const statusErrorHandler = require('../helpers/statusErrorHandler');
const { BAD_REQUEST } = require('../helpers/statusHTTP');

const loginDTO = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});

const loginValidation = (req, _res, next) => {
  const { error } = loginDTO.validate(req.body, { abortEarly: false });

  if (!error) {
    return next();
  }
  const [{ message }] = error.details;
  statusErrorHandler({ message, status: BAD_REQUEST });
};

module.exports = loginValidation;