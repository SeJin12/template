import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Router from "../routers/index.js";
import morganMiddleware from "./Morgan.js";
import { ErrorHandler } from "./Error.js";

const Express = (app) => {
  app.use(bodyParser.json()); // request body => json
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors({ credentials: true, origin: "*" }));
  app.use(express.json({ limit: "16mb" }));

  app.use(morganMiddleware);

  app.head("/status", (req, res) => {
    res.status(200).end();
  });

  Router(app);

  app.use(ErrorHandler);

  return app;
};

export default Express;
