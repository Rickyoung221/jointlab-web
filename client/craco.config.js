const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    output: {
      publicPath: 'auto',
    },
    alias: {
      "@": resolve("src"),
      "@img": resolve("src/assets/img"),
      "@api": resolve("src/api"),
      "@views": resolve("src/views"),
      "@admin": resolve("src/admin"),
      "@components:": resolve("src/views/commons/components")
    },
  },
};
