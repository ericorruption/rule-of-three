import React from "react";
import { SafeAreaView, View, Platform, StatusBar } from "react-native";
import App from "./src/App";
import brandColor from "./src/colors";

export default () => (
  <SafeAreaView style={{ backgroundColor: brandColor, height: "100%" }}>
    <StatusBar barStyle="light-content" />
    {Platform.OS === "android" && (
      <View style={{ height: StatusBar.currentHeight }} />
    )}
    <App />
  </SafeAreaView>
);
