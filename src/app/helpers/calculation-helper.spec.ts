import { CalculationHelper } from './calculation-helper';

describe('tax-amount-calculation', () => {
  it('should return the correct amount when value is in EUR', () => {
    const initialAmount = 1258.44;
    const toSGDFactor = 0.6292198838719976;
    const toUSDFactor = 0.7598199759292418;

    expect(
      CalculationHelper.getValueInCurrency(
        initialAmount,
        toSGDFactor,
        toUSDFactor
      )
    ).toBe(1519.64);
  });

  it('should return the correct amount when value is in SGD', () => {
    const initialAmount = 1000;
    const toSGDFactor = 1;
    const toUSDFactor = 0.7598199759292418;

    expect(
      CalculationHelper.getValueInCurrency(
        initialAmount,
        toSGDFactor,
        toUSDFactor
      )
    ).toBe(759.82);
  });
});
