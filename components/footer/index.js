/**
 * fileName: footer/index.js
 * description: the footer component
 */

import * as React from "react";
import { View } from "react-native";

import { verticalScale } from "react-native-size-matters";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { COLOR_PRESETS } from "../../presets/colors";

/**
 * @exports Footer
 * @returns {React.Component}
 * @example <Footer />
 */
export const Footer = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingBottom: insets.bottom + verticalScale(45),
        backgroundColor: COLOR_PRESETS.PRIMARY.BASE,
      }}
    ></View>
  );
};
