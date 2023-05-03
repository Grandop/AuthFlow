import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/SignIn/SignInScreen";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
}