import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import AmountDisplay from "../common/components/AmountDisplay";
import Button from "../common/components/Button";
import { usePayment } from "../common/context/PaymentContext";
import { useCreatePayment } from "../common/hook/useCreatePayment";
import InputText from "../common/components/InputText";
import { CreatePaymentScreenStyles as styles } from "../theme/styles/CreatePaymentScreenStyles";

const CreatePaymentScreen = () => {
  const [amount, setAmount] = useState("");
  const [concept, setConcept] = useState("");
  const { paymentData } = usePayment();
  const { createPayment, loading } = useCreatePayment();

  const handleContinue = () => {
    const numericAmount = parseFloat(amount.replace(",", "."));
    if (!isNaN(numericAmount) && numericAmount > 0) {
      createPayment(numericAmount, concept);
    }
  };

  return (
    <View style={styles.container}>
      <AmountDisplay
        value={amount}
        currency={paymentData.currency}
        onChange={setAmount}
      />
      <InputText value={concept} onChangeText={setConcept} />
      <Button
        title="Continue"
        onPress={handleContinue}
        style={styles.button}
        disabled={
          !amount || parseFloat(amount.replace(",", ".")) <= 0 || loading
        }
      />
    </View>
  );
};

export default CreatePaymentScreen;
