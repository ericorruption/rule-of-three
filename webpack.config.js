const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

const appDirectory = resolve(__dirname, "./");

const plugins = [
  new HtmlWebpackPlugin({
    title: "Rule of Three",
    template: "src/web/index.html"
  })
];

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
        include: [
          resolve(appDirectory, "App.web.js"),
          resolve(appDirectory, "src"),
          resolve(appDirectory, "node_modules/react-native-easy-toast")
        ],
        loader: "babel-loader",
        options: {
          plugins: ["react-native-web"]
        }
      }
    ]
  },
  plugins
};
