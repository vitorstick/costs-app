import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PaymentCurrenciesInterface } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private _paymentCurrency$: BehaviorSubject<PaymentCurrenciesInterface | null> =
    new BehaviorSubject<PaymentCurrenciesInterface | null>(null);

  setFormForSplitExpense(paymentCurrencies: PaymentCurrenciesInterface): void {
    this._paymentCurrency$.next(paymentCurrencies);
  }

  getSplitExpenseFormValue(): Observable<PaymentCurrenciesInterface | null> {
    return this._paymentCurrency$.asObservable();
  }
}
