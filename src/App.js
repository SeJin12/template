import express from "express";
import Express from "./loaders/app/Express.js";
import logger from "./loaders/app/Wiston.js";

const App = async () => {
  const PORT = 3000; // @env
  const app = express();

  // Error Test
  app.get('/error', (req, res) => {
    logger.error('Error Message');
    res.sendStatus(500);
  })

  Express(app);

  app.listen(PORT, () => logger.info(`Running Server:${PORT}`));
};

App();
