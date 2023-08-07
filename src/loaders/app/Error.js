import logger from "./Wiston.js";

const ErrorHandler = (error, req, res, next) => {
  logger.error("Error Handling");
  res.status(err.status || 500);
  res.render("error");
};

export { ErrorHandler };
