import React from "react";
import Home from "../screens/HomeScreen/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingScreen from "../screens/SettingScreen/SettingScreen";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
  );
}