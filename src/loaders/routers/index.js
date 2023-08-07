import User from "./User.js";
import Keyword from "./Keyword.js";

export default (app) => {
  app.use("/user", User);
  app.use("/keyword", Keyword);
  return app;
};
