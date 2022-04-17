import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseCurrencyInterface, PaymentCurrenciesInterface } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private _paymentCurrency$: BehaviorSubject<PaymentCurrenciesInterface | null> =
    new BehaviorSubject<PaymentCurrenciesInterface | null>(null);

  private _baseCurrency$: BehaviorSubject<BaseCurrencyInterface | null> =
    new BehaviorSubject<BaseCurrencyInterface | null>(null);

  setFormForSplitExpense(paymentCurrencies: PaymentCurrenciesInterface): void {
    this._paymentCurrency$.next(paymentCurrencies);
  }

  getSplitExpenseFormValue(): Observable<PaymentCurrenciesInterface | null> {
    return this._paymentCurrency$.asObservable();
  }

  setBaseCurrency(baseCurrency: BaseCurrencyInterface): void {
    this._baseCurrency$.next(baseCurrency);
  }

  getBaseCurrency(): Observable<BaseCurrencyInterface | null> {
    return this._baseCurrency$.asObservable();
  }
}
