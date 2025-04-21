import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { usePayment } from '../context/PaymentContext';

export const PaymentHeader = () => {
  const { paymentData } = usePayment();
  const { amount, currency } = paymentData;

  return (
    <View style={styles.headerContainer}>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
         <Image
                 source={require('../../assets/dinner.png')} 
               />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headerTitle}>Solicitud de pago</Text>
          <Text style={styles.amountText}>
            {amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {currency.symbol}
          </Text>
        </View>
      </View>
      <Text style={styles.shareText}>Comparte el enlace de pago con el cliente</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#F8F9FA',
    padding: 20,
    alignItems: 'center', 
    borderRadius: 12,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: "center",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#E6F0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column', 
  },
  headerTitle: {
    fontSize: 14,
    color: '#666',
  },
  amountText: {
    fontSize: 30,
    fontWeight: "700",
    color: '#003366',
  },
  shareText: {
    fontSize: 12,
    color: '#666',
    marginTop: 10, 
  },
});
