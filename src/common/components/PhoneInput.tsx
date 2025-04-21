import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Linking,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomModal from "../../common/components/BottomModal";
import { useNavigation } from "@react-navigation/native";
import { usePayment } from "../context/PaymentContext";

export const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { paymentData } = usePayment();
  const { countryCode } = paymentData;

  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const handleSend = () => {
    const code = countryCode.symbol.replace("+", "");
    const number = `${code}${phoneNumber.replace(/\D/g, "")}`;
    const message = `¡Hola! Aquí tienes el enlace para completar tu pago: ${paymentData.paymentLink}`;

    const url = `whatsapp://send?phone=${number}&text=${encodeURIComponent(
      message
    )}`;
    console.log(url);
    Linking.openURL(url)
      .then(() => {
        setModalVisible(true);
      })
      .catch(() => {
        alert("No se pudo abrir WhatsApp. Asegúrate de tenerlo instalado.");
      });
  };

  const handleNavigation = () => {
    (navigation as any).navigate("SelectCodeFrom");
  };

  const handleNavigationModal = () => {
    setModalVisible(false);
    (navigation as any).navigate("CreatePayment");

  };

  return (
    <>
      <View style={styles.phoneInputContainer}>
        <View style={styles.phoneInputLeft}>
          <Image
            source={require("../../assets/whatsapp.png")}
            resizeMode="contain"
            style={{ marginRight: 7 }}
          />
          <TouchableOpacity
            style={styles.countryCodeButton}
            onPress={handleNavigation}
          >
            <Text style={styles.countryCodeText}>{countryCode?.symbol}</Text>
            <Ionicons name="chevron-down" size={16} color="#333" />
          </TouchableOpacity>
          <TextInput
            style={styles.phoneNumberInput}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            placeholder="300 678 9087"
          />
        </View>
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>

      <BottomModal
        visible={modalVisible}
        onClose={handleNavigationModal}
        icon={require("../../assets/circle.png")}
        title="Solicitud enviada"
        subtitle="Tu solicitud de pago enviada ha sido enviada con éxito por WhatsApp."
        buttonText="Entendido"
        buttonColor="#035AC5"
      />
    </>
  );
};

const styles = StyleSheet.create({
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 6,
    marginVertical: 12,
    overflow: "hidden",
  },
  phoneInputLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  countryCodeButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
    borderRightWidth: 1,
    borderRightColor: "#DDD",
    marginRight: 10,
  },
  countryCodeText: {
    fontSize: 14,
    color: "#333",
    marginRight: 5,
  },
  phoneNumberInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 12,
  },
  sendButton: {
    backgroundColor: "#0066CC",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  sendButtonText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "500",
  },
});
