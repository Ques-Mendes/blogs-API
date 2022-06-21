// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw

const statusErrorHandler = ({ message = '', status }) => {
  const error = new Error(message);
  error.status = status;
  throw error;
};

module.exports = statusErrorHandler;