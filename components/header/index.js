/**
 * fileName: header/index.js
 * description: the header component with navigation back button
 */

import * as React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import PropTypes from "prop-types";
import { verticalScale } from "react-native-size-matters";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { COLOR_PRESETS } from "../../presets/colors";

/**
 * @exports Header
 * @param {
 *   backButton?: boolean
 * } props
 * @returns {React.Component}
 * @example <Header backButton={true}/>
 */
export const Header = ({ backButton }) => {
  const insets = useSafeAreaInsets();

  //TODO: implement the back button prop to show back button

  return (
    <>
      <StatusBar backgroundColor={COLOR_PRESETS.PRIMARY.BASE} />
      <View
        style={{
          paddingTop: insets.top + verticalScale(40),
          backgroundColor: COLOR_PRESETS.PRIMARY.BASE,
        }}
      ></View>
    </>
  );
};

Header.propTypes = {
  /**
   * shows the back button default is false
   */
  backButton: PropTypes.bool,
};
