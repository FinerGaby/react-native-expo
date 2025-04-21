import { StyleSheet } from "react-native";
import { primary } from "../colors";

export const SelectCodeFromStyles = StyleSheet.create({
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
    color: primary.dark,
  },
  code: {
    fontSize: 14,
    color: "#666666",
    marginTop: 2,
  },
});
