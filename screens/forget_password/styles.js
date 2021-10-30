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
    borderWidth: 2,
    borderColor: COLOR_PRESETS.PRIMARY.DARK,
    borderRadius: 10,
    height: verticalScale(30),
    borderBottomColor:COLOR_PRESETS.PRIMARY.DARK,
    borderBottomWidth: 2,
  },
  leftIconContainer: {
    marginLeft: moderateScale(10),
  },
  input: {
    fontSize: moderateScale(15),
    textAlign: "center",
    letterSpacing: moderateScale(0.12),
  },
  inputRootContainer: {
    paddingHorizontal: moderateScale(28),
    paddingVertical: verticalScale(24),
    paddingBottom: 0,
  },
  testHeader: {
    marginTop: verticalScale(20),
    //marginLeft: moderateScale(20),
    fontSize: moderateScale(20),
    color: COLOR_PRESETS.PRIMARY.DARK,
   // marginBottom: verticalScale(10),
    textAlign:"center"
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
    width: (Dimensions.get("window").width - 3 * moderateScale(22)) / 2,
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
    maxWidth: '75%',
    minHeight:60
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
  SingIn : {
    marginTop: verticalScale(-4),
    marginLeft: moderateScale(105),
    //marginRight: moderateScale(10),
    borderWidth: 2,
    borderColor: COLOR_PRESETS.PRIMARY.DARK,
    borderRadius: 10,
    height: verticalScale(40),
    borderBottomColor:COLOR_PRESETS.PRIMARY.DARK,
    borderBottomWidth: 2,
    textAlign: "center",
    fontSize: moderateScale(20),
    fontWeight:"600",
    width:150,
    paddingTop:5,
    backgroundColor:COLOR_PRESETS.PRIMARY.DARK,
    color:"white"
  },
  signup : 
  {
    fontSize: moderateScale(15),
    fontWeight:"600",
    textDecorationLine:"underline",
    color: COLOR_PRESETS.PRIMARY.DARK,
    //marginLeft:200,
  },
  bottom :
  {
    marginTop: verticalScale(50),
    marginLeft: moderateScale(35),
    flexDirection: "row",
    alignItems: "center",
  },
});
