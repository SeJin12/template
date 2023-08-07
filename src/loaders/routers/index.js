import User from "./User.js";
import Keyword from "./Keyword.js";

export default (app) => {
  app.head("/status", (req, res) => {
    res.status(200).end();
  });

  app.use("/user", User);
  app.use("/keyword", Keyword);
  return app;
};
