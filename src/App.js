import express from "express";
import Express from "./loaders/app/Express.js";
import logger from './loaders/app/Wiston.js'
import config from './config/index.js'

const App = () => {
  try {
    const PORT = config.server.port
    const app = express();
    
    Express(app);

    app.listen(PORT, () => logger.info(`Running Server:${PORT}`));
  } catch (err) {
    logger.error(err);
  }
};

App();
