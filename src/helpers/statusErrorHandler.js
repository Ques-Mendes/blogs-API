// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
// https://rollbar.com/guides/javascript/how-to-throw-exceptions-in-javascript/

const statusErrorHandler = ({ message = '', status }) => {
  const error = new Error(message);
  error.status = status;
  throw error;
};

module.exports = statusErrorHandler;