import React from "react";
import { AppRegistry, View } from "react-native";
import BaseApp from "./src/App";
import brandColor from "./src/colors";

const withTopBar = Component => () => (
  <View
    style={{
      flex: 1,
      borderColor: brandColor,
      borderTopWidth: 8
    }}
  >
    <Component />
  </View>
);

const App = withTopBar(BaseApp);

AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", { rootTag: document.getElementById("app") });

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js").then(function() {
    console.log("Service Worker Registered");
  });
}
