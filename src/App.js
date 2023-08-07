import express from "express";
import Express from "./loaders/app/Express.js";
import logger from "./loaders/app/Wiston.js";

const App = () => {
  try {
    const PORT = 3000; // @env
    const app = express();

    Express(app);

    app.listen(PORT, () => logger.info(`Running Server:${PORT}`));
  } catch (err) {
    logger.error(err);
  }
};

App();
