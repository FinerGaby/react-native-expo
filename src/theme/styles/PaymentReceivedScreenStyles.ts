import { StyleSheet } from "react-native";
import { primary, secondary } from "../colors";

export const PaymentReceivedScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: primary.white,
    justifyContent: "center",
  },
  containerText: {
    alignItems: "center",
    backgroundColor: primary.white,
    justifyContent: "center",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
  },
  footer: {
    paddingBottom: 24,
    backgroundColor: primary.white,
  },
  text: {
    color: primary.blue,
  },
  button: {
    backgroundColor: secondary.whiteSecondary,
  },
  logo: {
    width: 160,
    height: 40,
    marginTop: 20,
  },
  successImage: {
    width: 220,
    height: 220,
    marginTop: 60,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: secondary.darkShades,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});
