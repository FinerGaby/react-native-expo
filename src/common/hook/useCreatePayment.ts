import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { usePayment } from "../context/PaymentContext";
import { DEVICE_ID, ENDPOINTS } from "../constants/api";

export const useCreatePayment = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {
    paymentData,
    setAmount: setContextAmount,
    setPaymentLink,
    setPaymentResData,
  } = usePayment();

  const createPayment = async (amount: number, concept: string) => {
    setLoading(true);

    const paymentDataToSend = {
      expected_output_amount: amount,
      input_currency: "BTC_TEST",
      notes: concept,
      fiat: paymentData.currency?.code,
    };

    try {
      const response = await fetch(ENDPOINTS.CREATE_PAYMENT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Device-Id": DEVICE_ID,
        },
        body: JSON.stringify(paymentDataToSend),
      });

      const result = await response.json();

      if (response.ok) {
        setContextAmount(amount);
        setPaymentLink(result.web_url);
        setPaymentResData(result);
        (navigation as any).navigate("PaymentRequest");
      } else {
        Alert.alert("Error", result.message || "No se pudo crear el pago");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Hubo un problema al conectar con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return {
    createPayment,
    loading,
  };
};
