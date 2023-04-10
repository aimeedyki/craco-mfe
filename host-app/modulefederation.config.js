const deps = require("./package.json").dependencies;

module.exports = {
  name: "host",
  remotes: {
    header: "header@http://localhost:3002/remoteEntry.js",
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
