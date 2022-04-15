import { CalculationHelper } from './calculation-helper';

describe('tax-amount-calculation', () => {
  it('should return the correct amount', () => {
    const amount = 100;
    const taxRatePercentage = 10;

    expect(CalculationHelper.getValue(amount, taxRatePercentage)).toBe(9.09);
  });
});
