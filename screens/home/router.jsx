import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from ".";
import OrderScreen from "../order";
import Screen2 from "../screen2";
import LabSchedule from "../lab_scehdule";

export const routeNames = {
  HOME: "HomeNavigator.home",
  SCREEN_2: "HomeNavigator.screen_2",
  ORDER: "HomeNavigator.order",
  LAB_SCHEDULE: "HomeNavigator.labSchedule",
};

const Stack = createStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={routeNames.HOME}
    >
      <Stack.Screen name={routeNames.HOME} component={HomeScreen} />
      <Stack.Screen name={routeNames.SCREEN_2} component={Screen2} />
      <Stack.Screen name={routeNames.ORDER} component={OrderScreen} />
      <Stack.Screen name={routeNames.LAB_SCHEDULE} component={LabSchedule} />
    </Stack.Navigator>
  );
}
