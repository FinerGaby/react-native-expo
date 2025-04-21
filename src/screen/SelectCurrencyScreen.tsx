import { Image, Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SelectOption } from "../common/components/SelectOption";
import { usePayment } from "../common/context/PaymentContext";
import { CURRENCIES } from "../common/constants/currencies";
import { SelectCurrencyScreenStyles as styles } from "../theme/styles/SelectCurrencyScreenStyles";

export const SelectCurrencyScreen = () => {
  const { paymentData, setCurrency } = usePayment();
  const { currency } = paymentData;
  const navigation = useNavigation();

  const handleSelectCurrency = (selectedCurrency: any) => {
    setCurrency(selectedCurrency);
    navigation.goBack();
  };

  const renderCurrencyItem = (item: any) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.code}>{item.code}</Text>
      </View>
    </View>
  );

  return (
    <SelectOption
      data={CURRENCIES}
      selectedItem={currency}
      onSelect={handleSelectCurrency}
      renderItem={renderCurrencyItem}
      searchKey="name"
    />
  );
};
