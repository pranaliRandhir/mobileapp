/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Screen2 from "../screens/screen2";
import HomeScreen from "../screens/home";
import SignIn from "../screens/signin";
import LabSchedule from "../screens/lab_scehdule";

import APIDemo from "../screens/api-demo";
import { RouteNames } from "./route_names";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={RouteNames.SIGN_IN}
    >
      <Stack.Screen name={RouteNames.SCREEN_2} component={Screen2} />
      <Stack.Screen name={RouteNames.LAB_SCHEDULE} component={LabSchedule} />
      <Stack.Screen name={RouteNames.HOME} component={HomeScreen} />
      <Stack.Screen name={RouteNames.SIGN_IN} component={SignIn} />
      <Stack.Screen name={RouteNames.API_DEMO} component={APIDemo} />
    </Stack.Navigator>
  );
}
