import { Image } from "react-native";
import CreatePaymentScreen from "../../screen/CreatePaymentScreen";
import PaymentRequestScreen from "../../screen/PaymentRequestScreen";
import CurrencySelector from "../../common/components/CurrencySelector";
import { PayQrCodeScreen } from "../../screen/PayQrCodeScreen";
import PaymentReceivedScreen from "../../screen/PaymentReceivedScreen";
import { SelectCurrencyScreen } from "../../screen/SelectCurrencyScreen";
import { SelectCodeFrom } from "../../screen/SelectCodeFrom";

export const screens = [
  {
    name: "CreatePayment",
    component: CreatePaymentScreen,
    options: {
      title: "Crear pago",
      headerRight: () => <CurrencySelector />,
    },
  },
  {
    name: "PaymentRequest",
    component: PaymentRequestScreen,
    options: { title: "Solicitud de pago", headerShown: false },
  },
  {
    name: "SelectCurrency",
    component: SelectCurrencyScreen,
    options: { title: "Selecciona una divisa" },
  },
  {
    name: "SelectCodeFrom",
    component: SelectCodeFrom,
    options: { title: "Seleccionar país" },
  },
  {
    name: "SelectPayQrCode",
    component: PayQrCodeScreen,
    options: { title: "" },
  },
  {
    name: "PaymentReceivedScreen",
    component: PaymentReceivedScreen,
    options: {
      headerTitle: () => (
        <Image
          source={require("../../assets/bitnovo.png")}
          style={{ width: 88, height: 32 }}
        />
      ),
    },
  },
];
