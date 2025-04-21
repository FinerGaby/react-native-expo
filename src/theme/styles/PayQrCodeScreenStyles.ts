import { StyleSheet, Dimensions } from "react-native";
import { primary, secondary } from "../colors";

const { width } = Dimensions.get("window");
const containerWidth = width * 0.9;

export const PayQrCodeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary.blue,
    justifyContent: "center",
    padding: 20,
    paddingHorizontal: 25,
  },
  paymentContainer: {
    padding: 15,
    backgroundColor: secondary.whiteGreen,
    borderRadius: 8,
    marginVertical: 12,
    marginTop: 30,
  },

  row: {
    flexDirection: "row",
  },

  icon: {
    marginRight: 8,
  },

  instructionText: {
    fontSize: 12,
    color: secondary.darkBlue,
  },
  paymentText: {
    width: containerWidth,
    maxWidth: 400,
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 40,
    marginBottom: 20,
  },
  qrContainer: {
    marginTop: 20,
    marginBottom: 25,
    backgroundColor: primary.white,
    padding: 20,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  qrPlaceholder: {
    justifyContent: "center",
    alignItems: "center",
  },
  qrPlaceholderText: {
    color: "#666",
    fontSize: 14,
  },
  amount: {
    fontSize: 26,
    fontWeight: "700",
    marginVertical: 20,
    color: primary.white,
  },
  statusMessage: {
    fontSize: 14,
    color: primary.white,
    marginBottom: 30,
    fontWeight: "light",
    textAlign: "center",
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#eee",
    marginTop: 15,
  },
  viewOnlyText: {
    fontSize: 12,
    color: "#999",
    marginTop: 15,
  },
});
