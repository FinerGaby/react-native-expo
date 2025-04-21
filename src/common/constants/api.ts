export const BASE_URL = "https://payments.pre-bnvo.com/api/v1";
export const WS_BASE_URL = "wss://payments.pre-bnvo.com/ws";
export const DEVICE_ID = "d497719b-905f-4a41-8dbe-cf124c442f42";

export const ENDPOINTS = {
  CREATE_PAYMENT: `${BASE_URL}/orders/`,
};

export const WEBSOCKETS = {
  PAYMENT_UPDATES: (identifier: string) =>
    `${WS_BASE_URL}/merchant/${identifier}`,
};
