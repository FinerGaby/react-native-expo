import React, { createContext, useContext, useState, ReactNode } from "react";

type Currency = {
  code: string;
  symbol: string;
  name: string;
};

type PaymentData = {
  currency: Currency;
  amount: number;
  paymentLink?: string;
  paymentResData?: any;
  countryCode: Currency;
};

type PaymentContextType = {
  paymentData: PaymentData;
  setCurrency: (currency: Currency) => void;
  setAmount: (amount: number) => void;
  setPaymentLink: (link: string) => void;
  setPaymentResData: (data: any) => void;
  setCountryCode: (currency: Currency) => void;
};

const defaultCurrency = {
  code: "USD",
  symbol: "$",
  name: "US Dollar",
};

const defaultCountryCode = {
  code: 'España', 
  symbol: '+34', 
  name: '+34',
};

const defaultPaymentData: PaymentData = {
  currency: defaultCurrency,
  amount: 0,
  paymentLink: "",
  paymentResData: null,
  countryCode: defaultCountryCode
};

const PaymentContext = createContext<PaymentContextType>({
  paymentData: defaultPaymentData,
  setCurrency: () => {},
  setAmount: () => {},
  setPaymentLink: () => {},
  setPaymentResData: () => {},
  setCountryCode: () => {}
});

export const usePayment = () => useContext(PaymentContext);
export const useCurrency = usePayment; 

export const PaymentProvider = ({ children }: { children: ReactNode }) => {
  const [paymentData, setPaymentData] =
    useState<PaymentData>(defaultPaymentData);

  const setCurrency = (currency: Currency) => {
    setPaymentData((prev) => ({ ...prev, currency }));
  };

  const setCountryCode = (countryCode: Currency) => {
    setPaymentData((prev) => ({ ...prev, countryCode }));
  };

  const setAmount = (amount: number) => {
    setPaymentData((prev) => ({ ...prev, amount }));
  };

  const setPaymentLink = (link: string) => {
    setPaymentData((prev) => ({ ...prev, paymentLink: link }));
  };

  const setPaymentResData = (data: any) => {
    setPaymentData((prev) => ({ ...prev, paymentResData: data }));
  };

  return (
    <PaymentContext.Provider
      value={{
        paymentData,
        setCurrency,
        setAmount,
        setPaymentLink,
        setPaymentResData,
        setCountryCode,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};
