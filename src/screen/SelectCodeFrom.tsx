import { Image, Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SelectOption } from "../common/components/SelectOption";
import { usePayment } from "../common/context/PaymentContext";
import { LIST_FROM } from "../common/constants/listFrom";
import { SelectCodeFromStyles as styles } from "../theme/styles/SelectCodeFromStyles";

export const SelectCodeFrom = () => {
  const { paymentData, setCountryCode } = usePayment();
  const { countryCode } = paymentData;
  const navigation = useNavigation();

  const handleSelectCurrency = (selectedCurrency: any) => {
    setCountryCode(selectedCurrency);
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
      data={LIST_FROM}
      selectedItem={countryCode}
      onSelect={handleSelectCurrency}
      renderItem={renderCurrencyItem}
      searchKey="name"
    />
  );
};
