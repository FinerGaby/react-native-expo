import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "./screenConfig";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontFamily: "Mulish_700Bold",
        fontSize: 18,
      },
    }}
  >
    {screens.map(({ name, component, options }) => (
      <Stack.Screen
        key={name}
        name={name}
        component={component}
        options={options}
      />
    ))}
  </Stack.Navigator>
);
