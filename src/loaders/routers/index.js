import User from "./User.js";

export default (app) => {
  app.use("/user", User);

  return app;
};
