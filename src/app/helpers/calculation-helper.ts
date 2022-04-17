export class CalculationHelper {
  static getValueToDa(amount: number, factor: number): number {
    return amount / factor;
  }

  static getValueToBase(amount: number, factor: number): number {
    return amount * factor;
  }

  // Value in EUR to convert to SGD and then convert from SGD to USD
  static getValueInCurrency(
    amount: number,
    factorToDaCurrency: number,
    factorToBaseCurrency: number
  ): number {
    // Convert to factorToDaCurrency
    const valueInDaCurrency = CalculationHelper.getValueToDa(
      amount,
      factorToDaCurrency
    );
    // Convert to factorToBaseCurrency
    const valueInBaseCurrency = CalculationHelper.getValueToBase(
      valueInDaCurrency,
      factorToBaseCurrency
    );
    // return valueInBaseCurrency;
    return Math.round(valueInBaseCurrency * 10000) / 10000;
  }
}
