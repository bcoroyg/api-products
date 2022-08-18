import boom from '@hapi/boom';
//import Joi from 'joi';

const validate = (data, schema) => {
  //const { error } = Joi.validate(data, schema);
  const { error } = schema.validate(data, { abortEarly: false });
  return error;
};

const validationHandler = (schema, check = "body") => {
  return (req, res, next) => {
    const error = validate(req[check], schema);
    error ? next(boom.badRequest(error)) : next()
  };
};

export default validationHandler;
