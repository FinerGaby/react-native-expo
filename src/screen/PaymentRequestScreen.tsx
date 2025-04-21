import React from "react";
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Linking,
} from "react-native";
import { usePayment } from "../common/context/PaymentContext";
import { PaymentHeader } from "../common/components/PaymentHeader";
import { CopyableLink } from "../common/components/CopyableLink";
import { ActionOption } from "../common/components/ActionOption";
import { PhoneInput } from "../common/components/PhoneInput";
import { useNavigation } from "@react-navigation/native";
import Button from "../common/components/Button";
import { PaymentRequestScreenStyles as styles } from "../theme/styles/PaymentRequestScreenStyles";

const PaymentRequestScreen = () => {
  const { paymentData } = usePayment();
  const { paymentLink } = paymentData;
  const navigation = useNavigation();

  const handleEmailShare = () => {
    const subject = encodeURIComponent("Solicitud de pago");
    const body = encodeURIComponent(
      `¡Hola! Aquí tienes el enlace para completar tu pago: ${paymentLink}`
    );

    const emailUrl = `mailto:?subject=${subject}&body=${body}`;

    Linking.openURL(emailUrl).catch((err) =>
      console.error("Error al abrir cliente de correo:", err)
    );
  };

  const handleOtherAppsShare = () => {
    console.log("Compartir con otras aplicaciones");
  };

  const handleContinue = () => {
    (navigation as any).navigate("SelectPayQrCode");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <PaymentHeader />

          <CopyableLink
            handleCopy={handleContinue}
            link={paymentLink || "pay.bitnovo.com/59f9g9"}
          />

          <ActionOption
            icon={
              <Image
                source={require("../assets/sms.png")}
                resizeMode="contain"
              />
            }
            label="Enviar por correo electrónico"
            onPress={handleEmailShare}
          />

          <PhoneInput />

          <ActionOption
            icon={
              <Image
                source={require("../assets/other.png")}
                resizeMode="contain"
              />
            }
            label="Compartir con otras aplicaciones"
            onPress={handleOtherAppsShare}
          />
        </ScrollView>

        <View style={styles.footer}>
          <Button
            title="Nueva solicitud"
            onPress={() => (navigation as any).navigate("CreatePayment")}
            style={styles.button}
            textStyle={styles.text}
            rightIcon={
              <Image
                source={require("../assets/wallet-add.png")}
                resizeMode="contain"
              />
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentRequestScreen;
