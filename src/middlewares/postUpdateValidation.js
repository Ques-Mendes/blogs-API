const Joi = require('joi');
const statusErrorHandler = require('../helpers/statusErrorHandler');
const { BAD_REQUEST } = require('../helpers/statusHTTP');

const postUpdateDTO = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
}).messages({
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});

const postUpdateValidation = (req, _res, next) => {
  const { error } = postUpdateDTO.validate(req.body, { abortEarly: false });

  if (!error) {
    return next();
  }
  const [{ message }] = error.details;
  statusErrorHandler({ message, status: BAD_REQUEST });
};

module.exports = postUpdateValidation;