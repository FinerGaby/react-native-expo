import { StyleSheet } from "react-native";
import { primary, secondary } from "../colors";

export const PaymentRequestScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: primary.white,
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
  },
  scrollViewContent: {
    paddingTop: 25,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  footer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    backgroundColor: primary.white,
  },
  button: {
    backgroundColor: secondary.whiteSecondary,
  },
  text: {
    color: primary.blue,
  },
});
