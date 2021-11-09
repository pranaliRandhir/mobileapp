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
    //backgroundColor: COLOR_PRESETS.PRIMARY.LIGHT,
    paddingVertical: verticalScale(5),
    marginRight:150
  },

  logoSize: {
    width: moderateScale(150),
    height: moderateScale(50),
    resizeMode: "contain",
  },
  inputContainer: {
    borderWidth: 2,
    backgroundColor: COLOR_PRESETS.PRIMARY.LIGHT,
    borderRadius: 25,
    height: verticalScale(40),
    borderBottomColor:COLOR_PRESETS.PRIMARY.LIGHT,
    borderColor:COLOR_PRESETS.PRIMARY.LIGHT,
    borderBottomWidth: 2,
  },
  leftIconContainer: {
    //marginLeft: moderateScale(10),
  },
  input: {
    fontSize: moderateScale(15),
    textAlign: "left",
    letterSpacing: moderateScale(0.12),
    // color:"red",
    paddingLeft:20,
  },
  inputRootContainer: {
    paddingHorizontal: moderateScale(28),
    //paddingVertical: verticalScale(24),
    paddingBottom: 0,

  },
  CheckBox : {

    color:"blue",
  },
  testHeader: {
    marginTop: verticalScale(50),
    marginLeft: moderateScale(30),
    fontSize: moderateScale(20),
    fontWeight:"700",
    color: COLOR_PRESETS.PRIMARY.DARK,
    marginBottom: verticalScale(25),
    textAlign:"center"

  },

  testHeader1: {
    marginTop: verticalScale(-4),
    marginLeft: moderateScale(25),
    fontSize: moderateScale(15),
    fontWeight:"600",
    textDecorationLine:"underline",
    color: COLOR_PRESETS.PRIMARY.DARK,

    marginBottom: verticalScale(10),
  },
  SingIn : {
    marginTop: verticalScale(30),
    marginLeft: moderateScale(75),
    marginRight: moderateScale(10),
    borderWidth: 2,
    borderColor: COLOR_PRESETS.PRIMARY.DARK,
    borderRadius: 25,
    height: verticalScale(30),
    borderBottomColor:COLOR_PRESETS.PRIMARY.DARK,
    borderBottomWidth: 2,
    textAlign: "center",
    fontSize: moderateScale(20),
    fontWeight:"600",
    width:200,
    //paddingTop:5,
    backgroundColor:COLOR_PRESETS.PRIMARY.DARK,
    color:"white"
  },
  forget : {
    marginTop: verticalScale(15),
    marginLeft: moderateScale(25),
    marginBottom: verticalScale(20),
    color: COLOR_PRESETS.PRIMARY.DARK,
  },
  bottom :
  {
    marginTop: verticalScale(50),
    marginLeft: moderateScale(25),
    flexDirection: "row",
    alignItems: "center",


  },
  signup :
  {
    fontSize: moderateScale(15),
    fontWeight:"600",
    textDecorationLine:"underline",
    color: COLOR_PRESETS.PRIMARY.DARK,
    marginRight:30
  },
  listContainer: {
    marginHorizontal: moderateScale(22),
    justifyContent: "space-between",
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  cardRootContainer: {
    marginVertical: moderateScale(12),
    backgroundColor: COLOR_PRESETS.PRIMARY.LIGHT,
    //width: (Dimensions.get("window").width - 3 * moderateScale(2)) / 2,
    borderRadius: 16,
  },
  cardContentContainer: {
    padding: moderateScale(12),
    minHeight:100
  },
  cardHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardImg: {
    width: moderateScale(30),
    height: moderateScale(30),
    resizeMode: "contain",
    marginBottom:30
  },
  testName: {
    marginLeft: moderateScale(10),
    fontWeight: "bold",
    fontSize: moderateScale(12),
    minWidth: '125%',
    minHeight:30
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
  toggleDrawer :
  {
    fontSize:16,
    //color:COLOR_PRESETS.LIGHT.WHITE
  }
});
