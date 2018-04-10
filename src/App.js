import React from "react";
import { View, Text, Clipboard } from "react-native";
import TextInput from "./TextInput";
import styles from "./App.style";
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
        <View style={styles.content}>
          <Text style={styles.title}>Rule of Three</Text>
          <View>
            <View style={styles.row}>
              <TextInput
                onChangeText={this.handleChangeText.bind(this, "a")}
                keyboardType="numeric"
                placeholder="Value 1"
              />
              <TextInput
                onChangeText={this.handleChangeText.bind(this, "b")}
                keyboardType="numeric"
                placeholder="Value 2 (e.g. 100%)"
              />
            </View>
            <View style={styles.row}>
              <TextInput
                onChangeText={this.handleChangeText.bind(this, "c")}
                keyboardType="numeric"
                placeholder="Value 3"
              />
              <TextInput
                style={{ fontWeight: "bold" }}
                value={this.state.result ? this.state.result.toString() : ""}
                placeholder="Result"
                disabled={!this.state.result}
                selectTextOnFocus={true}
                onFocus={() =>
                  Clipboard.setString(this.state.result.toString())
                }
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
