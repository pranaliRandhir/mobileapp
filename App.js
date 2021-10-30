import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigation from "./navigation";
import AppStateContextProvider from "./providers/app-state/app-state.provider";
import AppToaster from "./components/app-toaster";
import { View } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <AppStateContextProvider>
        <Navigation />

        <AppToaster />
      </AppStateContextProvider>
    </SafeAreaProvider>
  );
}
