import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import calculate from "./calculate";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0,
      b: 0,
      c: 0,
      result: 0
    };
  }

  handleFormChange() {
    this.setState(({ a, b, c }) => ({
      a,
      b,
      c,
      result: calculate({ a, b, c })
    }));
  }

  handleChangeText(param, value) {
    const newState = { ...this.state };
    newState[param] = value;
    this.setState(newState);
    this.handleFormChange();
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this.handleChangeText.bind(this, "a")}
          style={styles.input}
        />
        <TextInput
          onChangeText={this.handleChangeText.bind(this, "b")}
          style={styles.input}
        />
        <TextInput
          onChangeText={this.handleChangeText.bind(this, "c")}
          style={styles.input}
        />
        <TextInput
          style={styles.input}
          editable={false}
          value={this.state.result || ""}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    borderColor: "#999",
    borderWidth: 1
  }
});
