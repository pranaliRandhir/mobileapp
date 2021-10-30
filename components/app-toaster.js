import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  AppStateContext,
  ToastType,
} from "../providers/app-state/app-state.provider";

export default class AppToaster extends Component {
  static contextType = AppStateContext;

  render() {
    const { sharedState } = this.context;
    const toasterState = sharedState?.appState?.toastState ?? {};
    return toasterState.isActive ? (
      <View
        style={{
          position: "absolute",
          bottom: 80,
          left: 10,
          right: 10,
          backgroundColor:
            toasterState.type === ToastType.ERROR
              ? "red"
              : toasterState.type === ToastType.WARNING
              ? "orange"
              : "green",
          paddingVertical: 10,
          paddingHorizontal: 8,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white" }}>{toasterState.message}</Text>
      </View>
    ) : null;
  }
}
