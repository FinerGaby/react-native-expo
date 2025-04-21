import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import Button from "../common/components/Button";
import { PaymentReceivedScreenStyles as styles } from "../theme/styles/PaymentReceivedScreenStyles";

const PaymentReceivedScreen = () => {
  const navigation = useNavigation();

  const handleContinue = () => {
    (navigation as any).navigate("CreatePayment");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.containerText}>
          <Image
            source={require("../assets/success.png")}
            style={styles.successImage}
            resizeMode="contain"
          />

          <Text style={styles.title}>Pago recibido</Text>

          <Text style={styles.subtitle}>
            El pago se ha confirmado con éxito
          </Text>
        </View>
        <View style={styles.footer}>
          <Button
            title="Finalizar"
            onPress={handleContinue}
            style={styles.button}
            textStyle={styles.text}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentReceivedScreen;
