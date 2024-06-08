// webpack.config.js
const path = require("path");

module.exports = {
  entry: {
    index: "./index.js", // Ensure .js extension
  },
  output: {
    filename: "[name].pack.js",
    path: path.resolve(__dirname, "dist"), // Define output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply to .js files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  mode: "production", // Change to 'development' if needed
};
