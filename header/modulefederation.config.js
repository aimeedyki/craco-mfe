const deps = require("./package.json").dependencies;

module.exports = {
  name: "header",
  exposes: {
    "./Header": "./src/Components/Header",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};