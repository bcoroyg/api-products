import boom from '@hapi/boom';
import config from '../../config/index.js';

const withErrorStack = (err, stack) => {
  if (config.dev) {
    return { ...err, stack }; // Object.assign({}, err, stack)
  };
  return err;
};

const logErrors = (err, req, res, next) => {
  console.log(err.stack)
  next(err);
};

const wrapErrors = (err, req, res, next) => {
  if (!err.isBoom) {
    return next(boom.badImplementation(err));
  }
  next(err);
};

const errorHandler = (err, req, res, next) => { //eslint-disable-line
  const {
    output: { statusCode, payload }
  } = err;

  res.status(statusCode || 500);
  //res.render("error", withErrorStack(payload, err.stack));
  res.json(withErrorStack(payload, err.stack));
};

export {
  logErrors,
  wrapErrors,
  errorHandler
}
