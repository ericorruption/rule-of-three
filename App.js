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
    {Platform.OS === "ios" &&
      parseInt(Platform.Version, 10) < 11 && (
        <View style={{ backgroundColor: brandColor, height: 20 }} />
      )}
    <App />
  </SafeAreaView>
);
