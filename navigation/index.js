/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from "react";

import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Screen2 from "../screens/screen2";
import HomeScreen from "../screens/home";
import SignIn from "../screens/signin";
import SignUp from "../screens/signup";
import LabSchedule from "../screens/lab_scehdule";
import SearchTest from "../screens/search_test";
import OrderScreen from "../screens/order";
import APIDemo from "../screens/api-demo";
import { DrawerScreens, RouteNames } from "./route_names";
import { Icon } from "react-native-elements";
import { COLOR_PRESETS } from "../presets/colors";
import { Header } from "../components";
import { AppStateContext } from "../providers/app-state/app-state.provider";

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

function AppNavigator() {
  return (
    <Drawer.Navigator initialRouteName={DrawerScreens.HOME}>
      <Drawer.Screen name={DrawerScreens.HOME} component={HomeScreen} />
      <Drawer.Screen name={DrawerScreens.SCREEN_2} component={Screen2} />
      <Drawer.Screen
        name={DrawerScreens.LAB_SCHEDULE}
        component={LabSchedule}
      />
      <Drawer.Screen name={DrawerScreens.SEARCH_TEST} component={SearchTest} />
      <Drawer.Screen name={DrawerScreens.ORDER} component={OrderScreen} />
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
      <Stack.Screen name={RouteNames.LANDING} component={AppNavigator} />
    </Stack.Navigator>
  );
}
