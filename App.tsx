import React, { StrictMode } from "react";
import type { FunctionComponent } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { ToastProvider } from "react-native-toast-notifications";

import { App } from "./src/App";
import { brandPrimary } from "./src/App.style";

const Entrypoint: FunctionComponent = () => (
  <StrictMode>
    <ToastProvider placement="bottom">
      {/* Account for IOS status bar */}
      <SafeAreaView style={{ flex: 0, backgroundColor: brandPrimary }} />
      <SafeAreaView
        style={{
          // https://reactnative.dev/docs/safeareaview - according to the docs, safeareaview needs the flex property -  without it the web version will render differently from the mobile versions
          flex: 1,
        }}
      >
        <StatusBar barStyle="light-content" backgroundColor={brandPrimary} />
        <App />
      </SafeAreaView>
    </ToastProvider>
  </StrictMode>
);

export default Entrypoint;
