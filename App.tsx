import React, { StrictMode } from "react";
import type { FunctionComponent } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { ToastProvider } from "react-native-fast-toast";

import { App } from "./src/App";
import { brandPrimary } from "./src/App.style";

const Entrypoint: FunctionComponent = () => (
  <StrictMode>
    <ToastProvider placement="bottom">
      {/* Applies color to iOS */}
      <SafeAreaView style={{ backgroundColor: brandPrimary }}>
        {/* Applies color to Android */}
        <StatusBar barStyle="light-content" backgroundColor={brandPrimary} />
        <App />
      </SafeAreaView>
    </ToastProvider>
  </StrictMode>
);

export default Entrypoint;
