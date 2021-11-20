/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from "react";
import { View, Image, SafeAreaView, Linking } from "react-native";
import { Input, Avatar, ListItem, Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import Screen2 from "../screens/screen2";
import HomeScreen from "../screens/home";
import Profile from "../screens/profile";
import ProfileEdit from "../screens/edit_profile";
import SignIn, { SingIn } from "../screens/signin";
import SignUp from "../screens/signup";
import ForgetPassword from "../screens/forget_password";
import ChangePassword from "../screens/change_password";
import LabSchedule from "../screens/lab_scehdule";
import SearchTest from "../screens/search_test";
import SearchLab from "../screens/search_lab";
import OrderScreen from "../screens/order";
import { HealthOrbitImage } from "../assets";
import { DrawerScreens, RouteNames } from "./route_names";
import { AppStateContext } from "../providers/app-state/app-state.provider";
import { COLOR_PRESETS } from "../presets/colors";
import { HomeNavigator } from "../screens/home/router";

export default function Navigation() {
  const context = React.useContext(AppStateContext);
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EFF5FD" }}>
      {/*Top Large Image */}
      <View
        style={{ backgroundColor: "#EFF5FD", height: 270, marginBottom: -46 }}
      >
        <Image
          source={HealthOrbitImage}
          style={{ marginTop: 80, marginLeft: 30 }}
          resizeMode="cover"
        />
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

function AppNavigator() {
  return (
    // <Drawer.Navigator initialRouteName={DrawerScreens.HOME}

    // drawerContent={(props) => <CustomSidebarMenu {...props} />}>

    //   <Drawer.Screen name={DrawerScreens.HOME} component={HomeScreen} />
    //   <Drawer.Screen name={DrawerScreens.PROFILE} component={Profile} />
    //   {/* <Drawer.Screen name="LOGOUT" /> */}
    //   <Drawer.Screen name={DrawerScreens.SCREEN_2} component={Screen2} />
    //   <Drawer.Screen
    //     name={DrawerScreens.LAB_SCHEDULE}
    //     component={LabSchedule}
    //   />
    //   <Drawer.Screen name={DrawerScreens.SEARCH_TEST} component={SearchTest} />
    //   <Drawer.Screen name={DrawerScreens.SEARCH_LAB} component={SearchLab} />
    //   <Drawer.Screen name={DrawerScreens.ORDER} component={OrderScreen} />

    // </Drawer.Navigator>

    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: COLOR_PRESETS.LIGHT.LIGHT,
        itemStyle: { marginVertical: 5, marginHorizontal: 1 },
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: "Home",

          drawerIcon: ({ color }) => (
            <Icon name="home" size={20} color={color} />
          ),
        }}
        component={HomeNavigator}
      />
      <Drawer.Screen
        name="Profile"
        options={{
          drawerLabel: "Profile",
          drawerIcon: ({ color }) => (
            <Icon name="user" size={20} color={color} />
          ),
        }}
        component={Profile}
      />
      <Drawer.Screen
        name="Change Password"
        options={{
          drawerLabel: "Change Password",
          drawerIcon: ({ color }) => (
            <Icon name="user" size={20} color={color} />
          ),
        }}
        component={ChangePassword}
      />

      <Drawer.Screen
        name="Logout"
        options={{
          drawerLabel: "Logout",
          drawerIcon: ({ color }) => (
            <Icon name="sign-out-alt" size={20} color={color} />
          ),
        }}
        component={SingIn}
      />
    </Drawer.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={RouteNames.SIGN_IN}
    >
      <Stack.Screen name={RouteNames.SIGN_IN} component={SignIn} />
      <Stack.Screen name={RouteNames.SIGN_UP} component={SignUp} />
      <Stack.Screen name={RouteNames.SEARCH_LAB} component={SearchLab} />
      <Stack.Screen name={RouteNames.SEARCH_TEST} component={SearchTest} />
      <Stack.Screen name={RouteNames.PROFILE_EDIT} component={ProfileEdit} />
      <Stack.Screen
        name={RouteNames.FORGET_PASSWORD}
        component={ForgetPassword}
      />
      <Stack.Screen name={RouteNames.LANDING} component={AppNavigator} />
    </Stack.Navigator>
  );
}
