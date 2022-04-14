export class CalculationHelper {
  static getValue(amount: number, factor: number): number {
    return Math.round((amount / factor) * 10000) / 10000;
  }
}
