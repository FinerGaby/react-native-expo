import { StyleSheet } from "react-native";

export const SelectCurrencyScreenStyles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  textContainer: {
    flexDirection: "column",
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000000",
  },
  code: {
    fontSize: 14,
    color: "#666666",
    marginTop: 2,
  },
});
