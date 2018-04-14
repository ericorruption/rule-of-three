import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: Platform.OS === "web" ? "center" : "flex-start",
    alignItems: "center",
    width: "100%",
    padding: "5%"
  },
  content: {
    margin: "auto",
    maxWidth: 600
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    color: "#222"
  },
  row: {
    flex: -1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16
  }
});
