import { StyleSheet, Platform } from "react-native";

export const brandPrimary = "#7746e8";

export const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: "5%",
    flex: 1,
    borderTopColor: Platform.OS === "web" ? brandPrimary : undefined,
    borderTopWidth: Platform.OS === "web" ? 8 : undefined,
  },
  content: {
    alignSelf: "center",
    maxWidth: 600,
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    color: "#222",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  input: {
    borderColor: "#dedede",
    color: "#333",
    borderWidth: Platform.OS === "android" ? 0 : 1,
    borderRadius: 4,
    width: "48%",
    fontSize: 24,
    height: 40,
    paddingHorizontal: 3,
    paddingVertical: 8,
    textAlign: "center",
  },
});
