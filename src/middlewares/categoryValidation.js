const Joi = require('joi');
const statusErrorHandler = require('../helpers/statusErrorHandler');
const { BAD_REQUEST } = require('../helpers/statusHTTP');

const categoryDTO = Joi.object({
  name: Joi.string().min(1).required(),
});

const categoryValidation = (req, _res, next) => {
  const { error } = categoryDTO.validate(req.body, { abortEarly: false });

  if (!error) {
    return next();
  }
  const [{ message }] = error.details;
  statusErrorHandler({ message, status: BAD_REQUEST });
};

module.exports = categoryValidation;