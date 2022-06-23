const Joi = require('joi');
const statusErrorHandler = require('../helpers/statusErrorHandler');
const { BAD_REQUEST } = require('../helpers/statusHTTP');

const postInfoDTO = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number().integer()).required(),
}).messages({
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});

const postInfoValidation = (req, _res, next) => {
  const { error } = postInfoDTO.validate(req.body, { abortEarly: false });

  if (!error) {
    return next();
  }
  const [{ message }] = error.details;
  statusErrorHandler({ message, status: BAD_REQUEST });
};

module.exports = postInfoValidation;