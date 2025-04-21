import React, { useEffect } from "react";
import { Text, TextInput, View } from "react-native";
import Navigation from "../navigation/Navigation";
import { PaymentProvider } from "../common/context/PaymentContext"; // Ajustá el path si es necesario
import {
  useFonts,
  Mulish_400Regular,
  Mulish_700Bold,
} from "@expo-google-fonts/mulish";
import { setupGlobalStyles } from "../theme/ThemeProvider";

const App = () => {
  const [fontsLoaded] = useFonts({
    Mulish_400Regular,
    Mulish_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      setupGlobalStyles();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <PaymentProvider>
      <Navigation />
    </PaymentProvider>
  );
};

export default App;
