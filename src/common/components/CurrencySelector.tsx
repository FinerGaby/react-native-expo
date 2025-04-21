import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { usePayment } from "../context/PaymentContext";

const CurrencySelector = () => {
  const navigation = useNavigation();
  const { paymentData } = usePayment();
  const { currency } = paymentData;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => (navigation as any).navigate("SelectCurrency")}
    >
      <Text style={styles.text}>{currency.code} ▼</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 24,
    backgroundColor: "#D3DCE64D",
  },
  text: {
    fontWeight: "bold",
    color: "#0a1a45",
    fontSize: 12,
  },
});

export default CurrencySelector;
