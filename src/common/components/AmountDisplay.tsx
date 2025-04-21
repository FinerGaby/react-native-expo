import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

type AmountDisplayProps = {
  value: string;
  currency: { code: string; symbol: string };
  onChange: (newAmount: string) => void;
};

const AmountDisplay = ({ value, currency, onChange }: AmountDisplayProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.amount, value.length > 0 && styles.amountActive]}
        value={value}
        keyboardType="numeric"
        onChangeText={onChange}
        placeholder="0.00"
        placeholderTextColor="#c1c9d9"
      />
      <Text style={[styles.amount, value.length > 0 && styles.amountActive]}>
        {currency.symbol}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  amount: {
    fontSize: 40,
    fontWeight: "600",
    color: "#c1c9d9", 
  },
  amountActive: {
    color: "#035AC5",
  },
});

export default AmountDisplay;
