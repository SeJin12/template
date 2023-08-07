import User from "./User.js";
import Keyword from "./Keyword.js";
import logger from "../app/Wiston.js"

export default (app) => {
  
  app.use((req, res, next) => {
    if (process.env.NODE_ENV !== "production") {
      logger.info(`[${req.method}][${req.url}]`)
    }
    next()
  })

  app.head("/status", (req, res) => {
    res.status(200).end();
  });

  app.use("/user", User);
  app.use("/keyword", Keyword);
  
  return app;
};
