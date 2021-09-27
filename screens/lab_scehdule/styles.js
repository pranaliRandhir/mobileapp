import { StyleSheet, Dimensions } from "react-native";

import { moderateScale, verticalScale } from "react-native-size-matters";

import { COLOR_PRESETS } from "../../presets/colors";

const spacingPresets = {};

const textPresets = {};

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: COLOR_PRESETS.LIGHT.WHITE,
  },

  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLOR_PRESETS.PRIMARY.LIGHT,
    paddingVertical: verticalScale(5),
  },

  logoSize: {
    width: moderateScale(262),
    height: moderateScale(262),
    resizeMode: "contain",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: COLOR_PRESETS.PRIMARY.DARK,
    borderRadius: 10,
    height: verticalScale(30),
    borderBottomColor: COLOR_PRESETS.PRIMARY.DARK,
    borderBottomWidth: 1,
    height: 40,
    paddingRight: 2,
  },
  leftIconContainer: {
    marginLeft: moderateScale(10),
  },
  input: {
    fontSize: moderateScale(15),
    textAlign: "left",
    letterSpacing: moderateScale(0.12),
  },
  inputRootContainer: {
    paddingHorizontal: moderateScale(28),
    paddingVertical: verticalScale(24),
    paddingBottom: 0,
  },
  testHeader: {
    marginTop: verticalScale(4),
    marginLeft: moderateScale(20),
    fontSize: moderateScale(20),
    color: COLOR_PRESETS.PRIMARY.DARK,
    marginBottom: verticalScale(10),
  },
  listContainer: {
    marginHorizontal: moderateScale(22),
    justifyContent: "space-between",
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  cardRootContainer: {
    marginVertical: moderateScale(11),
    backgroundColor: COLOR_PRESETS.PRIMARY.LIGHT,
    //width: (Dimensions.get("window").width - 3 * moderateScale(22)) / 2,
    borderRadius: 16,
    width: "100%",
  },
  CardRootContainer: {
    marginVertical: moderateScale(11),
    backgroundColor: COLOR_PRESETS.PRIMARY.DARK,
    //width: (Dimensions.get("window").width - 3 * moderateScale(22)) / 2,
    borderRadius: 16,
    width: "100%",
  },
  cardContentContainer: {
    padding: moderateScale(12),
  },
  cardHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
  },
  cardImg: {
    width: moderateScale(30),
    height: moderateScale(30),
    resizeMode: "contain",
  },

  testName: {
    marginLeft: moderateScale(12),
    fontWeight: "bold",
    fontSize: moderateScale(12),
    //Width: 70,
  },
  Day: {
    color: "white",
    fontWeight: "bold",
  },
  day: {
    paddingRight: 5,
    fontWeight: "bold",
    color: "black",
  },
  cardBodyContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 8,
  },
  cardBodyText: {
    fontSize: moderateScale(9),
    fontWeight: "200",
  },
  addText: {
    textAlign: "center",
    fontSize: moderateScale(9.5),
    marginVertical: verticalScale(6),
    fontWeight: "bold",
    color: COLOR_PRESETS.PRIMARY.DARK,
  },
  priceText: {
    fontWeight: "bold",
    fontSize: moderateScale(12),
    color: COLOR_PRESETS.PRIMARY.DARK,
  },
  priceContainer: {
    flex: 0.3,
    marginLeft: 4,
    justifyContent: "center",
  },
  tabStyle: {},
  scrollStyle: {
    backgroundColor: "white",
    paddingLeft: 65,
    paddingRight: 65,
    // justifyContent: 'center',
  },
  tabBarTextStyle: {
    fontSize: 14,
    fontWeight: "normal",
  },
  underlineStyle: {
    height: 3,
    backgroundColor: "red",
    borderRadius: 3,
    width: 15,
  },

  dayCardContainer: {
    width: moderateScale(80),
    backgroundColor: COLOR_PRESETS.PRIMARY.LIGHT,
  },
  DayCardContainer: {
    width: moderateScale(80),
    backgroundColor: COLOR_PRESETS.PRIMARY.DARK,
  },
  firstDayCard: {
    borderTopLeftRadius: moderateScale(14),
    borderBottomLeftRadius: moderateScale(14),
  },
  lastDayCard: {
    borderTopRightRadius: moderateScale(14),
    borderBottomRightRadius: moderateScale(14),
  },
});
