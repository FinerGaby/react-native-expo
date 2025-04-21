import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { usePayment } from "../common/context/PaymentContext";
import { useNavigation } from "@react-navigation/native";
import { WEBSOCKETS } from "../common/constants/api";
import { PayQrCodeScreenStyles as styles } from "../theme/styles/PayQrCodeScreenStyles";

export const PayQrCodeScreen = () => {
  const { paymentData } = usePayment();
  const { paymentLink = "", paymentResData, currency, amount } = paymentData;
  const navigation = useNavigation();

  useEffect(() => {
    console.log(paymentResData);
    const ws = new WebSocket(
      WEBSOCKETS.PAYMENT_UPDATES(paymentResData.identifier)
    );

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
      if (data.status === "completed") {
        (navigation as any).navigate("PaymentReceivedScreen");
      }
    };

    ws.onclose = () => {
      console.log("Conexión WebSocket cerrada");
    };

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, [paymentResData.identifier]);

  return (
    <View style={styles.container}>
      <View style={styles.paymentContainer}>
        <View style={styles.row}>
          <Image
            source={require("../assets/info-circle.png")} 
            style={styles.icon}
          />
          <View>
            <Text style={styles.instructionText}>
              Escanea el QR y serás redirigido a la pasarela de
            </Text>
            <Text style={styles.instructionText}>pago de Bitnovo Pay</Text>
          </View>
        </View>
      </View>
      <View style={styles.qrContainer}>
        {paymentLink && (
          <QRCode
            value={paymentLink}
            size={250}
            //logo={require("../assets/qr.png")}
            logoBorderRadius={8}
          />
        )}
      </View>
      <View style={styles.paymentText}>
        <Text style={styles.amount}>
          {amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
          {currency.symbol}
        </Text>

        <Text style={styles.statusMessage}>
          Esta pantalla se actualizará automáticamente
        </Text>
      </View>
    </View>
  );
};
