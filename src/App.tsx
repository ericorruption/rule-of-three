import type { FunctionComponent, ReactNode } from "react";
import { Text, TextInput, View, Keyboard } from "react-native";
import { useToast } from "react-native-toast-notifications";
import { calculate } from "./calculate";
import { useState } from "react";
import { brandPrimary, style } from "./App.style";
import * as Clipboard from "expo-clipboard";

// TODO handle decimals
export const App: FunctionComponent = () => {
  const [a, setA] = useState<number>();
  const [b, setB] = useState<number>();
  const [c, setC] = useState<number>();
  const value = calculate({ a, b, c });

  const toast = useToast();

  return (
    <Shell>
      <View style={style.row}>
        <TextInput
          selectionColor={brandPrimary}
          underlineColorAndroid={brandPrimary}
          style={style.input}
          onChangeText={(value) => setA(parseInt(value))}
          value={!a || isNaN(a) ? "" : a?.toString()}
          selectTextOnFocus={true}
          keyboardType="numeric"
          placeholder="Value 1"
        />
        <TextInput
          selectionColor={brandPrimary}
          underlineColorAndroid={brandPrimary}
          style={style.input}
          onChangeText={(value) => setB(parseInt(value))}
          value={!b || isNaN(b) ? "" : b?.toString()}
          selectTextOnFocus={true}
          keyboardType="numeric"
          placeholder="Value 2 (e.g. 100%)"
        />
      </View>
      <View style={style.row}>
        <TextInput
          selectionColor={brandPrimary}
          underlineColorAndroid={brandPrimary}
          style={style.input}
          onChangeText={(value) => setC(parseInt(value))}
          value={!c || isNaN(c) ? "" : c?.toString()}
          selectTextOnFocus={true}
          keyboardType="numeric"
          placeholder="Value 3"
        />
        <TextInput
          selectionColor={brandPrimary}
          underlineColorAndroid={brandPrimary}
          style={[style.input, { fontWeight: "bold" }]}
          value={!value || isNaN(value) ? "" : value.toString()}
          placeholder="Result"
          editable={!!value}
          selectTextOnFocus={true}
          onFocus={() => {
            if (!value) {
              return;
            }

            Keyboard.dismiss();
            Clipboard.setStringAsync(value.toString());
            toast?.show("Result copied to clipboard!");
          }}
        />
      </View>
    </Shell>
  );
};

const Shell = ({ children }: { children: ReactNode }) => (
  <View style={style.container}>
    <View style={style.content}>
      <Text style={style.title}>Rule of Three</Text>
      <View>{children}</View>
    </View>
  </View>
);
