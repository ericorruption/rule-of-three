const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

const appDirectory = resolve(__dirname, "./");

const plugins = [
  new HtmlWebpackPlugin({
    template: "src/index.html",
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true
    }
  })
];

const babelLoaderConfig = {
  test: /\.js$/,
  include: [
    resolve(appDirectory, "App.web.js"),
    resolve(appDirectory, "src"),
    resolve(appDirectory, "node_modules/react-native-easy-toast")
  ],
  use: {
    loader: "babel-loader",
    options: {
      cacheDirectory: true,
      presets: ["react-native"],
      plugins: ["react-native-web"]
    }
  }
};

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
  entry: [resolve(appDirectory, "App.web.js")],
  output: {
    filename: "[name].[hash].js",
    path: resolve(appDirectory, "dist")
  },
  module: {
    rules: [babelLoaderConfig]
  },
  plugins,
  resolve: {
    alias: {
      "react-native$": "react-native-web"
    },
    extensions: [".web.js", ".js"]
  }
};
