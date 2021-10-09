/**
 * fileName: header/index.js
 * description: the header component with navigation back button
 */

import * as React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import PropTypes from "prop-types";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/core";

import { COLOR_PRESETS } from "../../presets/colors";
import { Icon } from "react-native-elements";

/**
 * @exports Header
 * @param {
 *   backButton?: boolean
 * } props
 * @returns {React.Component}
 * @example <Header backButton={true}/>
 */
export const Header = ({ leading }) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  //TODO: implement the back button prop to show back button

  return (
    <>
      <StatusBar backgroundColor={COLOR_PRESETS.PRIMARY.BASE} />
      <View
        style={{
          paddingTop: insets.top,
          minHeight: verticalScale(72),
          backgroundColor: COLOR_PRESETS.PRIMARY.BASE,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            minWidth: moderateScale(48),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {leading}
        </View>
      </View>
    </>
  );
};

Header.propTypes = {
  /**
   * shows the back button default is false
   */
  backButton: PropTypes.bool,
};
