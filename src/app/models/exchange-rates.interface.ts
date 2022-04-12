export interface ExchangeRateInterface {
  sourceCurrency: string;
  paymentCurrencies: PaymentCurrenciesInterface[];
}

export interface PaymentCurrenciesInterface {
  fromCurrency: string;
  toCurrency: string;
  exchangeRate: number;
}
