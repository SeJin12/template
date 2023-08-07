//webpack.config.js
import path from "path";

const __dirname = path.resolve();
const getAbsolutePath = (target) => path.resolve(__dirname, target);

export default {
  resolve: {
    extensions: [".js",".json"],
    alias: {
      '@loaders': path.resolve(__dirname, "src/loaders")
    },
  },
};
