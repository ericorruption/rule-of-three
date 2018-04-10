const HtmlWebpackPlugin = require("html-webpack-plugin");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

const plugins = [new HtmlWebpackPlugin({ template: "src/web/index.html" })];

if (process.env.NODE_ENV === "production") {
  plugins.push(
    new SWPrecacheWebpackPlugin({
      cacheId: "rule-of-3",
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: "service-worker.js",
      minify: true,
      navigateFallback: "index.html",
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
    })
  );
}

module.exports = {
  entry: "./App.web.js",
  output: {
    filename: "[name].[hash].js"
  },
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
  plugins
};
