import React from "react";
import { TextInput, Platform } from "react-native";
import brandColor from "./colors";

const style = {
  borderColor: "#dedede",
  color: "#333",
  borderWidth: Platform.OS === "android" ? 0 : 1,
  borderRadius: 4,
  width: "48%",
  fontSize: 24,
  height: 40,
  paddingHorizontal: 3,
  paddingVertical: 8,
  textAlign: "center"
};

export default props => (
  <TextInput
    {...props}
    style={[style, props.style]}
    underlineColorAndroid={brandColor}
    selectionColor={brandColor}
  />
);
