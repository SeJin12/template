import express from "express";
import Express from "./loaders/app/Express.js";

const App = async () => {
  const PORT = 3000; // @env
  const app = express();

  Express(app);

  app.listen(PORT, () => console.log(`start server ${PORT}`));
};

App();
