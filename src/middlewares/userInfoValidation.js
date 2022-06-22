const Joi = require('joi');
const statusErrorHandler = require('../helpers/statusErrorHandler');
const { BAD_REQUEST } = require('../helpers/statusHTTP');

const userInfoDTO = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const userInfoValidation = (req, _res, next) => {
  const { error } = userInfoDTO.validate(req.body, { abortEarly: false });

  if (!error) {
    return next();
  }
  const [{ message }] = error.details;
  statusErrorHandler({ message, status: BAD_REQUEST });
};

module.exports = userInfoValidation;
