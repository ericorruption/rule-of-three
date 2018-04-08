const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./App.web.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: ["react-native-web"]
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })]
};
