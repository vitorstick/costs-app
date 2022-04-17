import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CalculationHelper } from 'src/app/helpers/calculation-helper';
import {
  PaymentCurrenciesInterface,
  BaseCurrencyInterface,
} from 'src/app/models';
import { CommunicationService } from 'src/app/services';

@Component({
  selector: 'app-cost-converted',
  templateUrl: './cost-converted.component.html',
  styleUrls: ['./cost-converted.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CostConvertedComponent implements OnInit {
  @Input('costValue')
  set costValue(value: number) {
    if (value) {
      this._costValue$.next(value);
    }
  }

  convertedValue$!: Observable<number>;
  baseCurrency$!: Observable<string | null>;

  private _costValue$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.convertedValue$ = combineLatest([
      this.communicationService.getSplitExpenseFormValue(),
      this.getBaseCurrency(),
      this._costValue$,
    ]).pipe(
      map(([paymentCurrency, baseCurrency, value]) => {
        console.log('map  paymentCurrency', paymentCurrency);
        if (paymentCurrency && baseCurrency) {
          const result = CalculationHelper.getValueInCurrency(
            value,
            paymentCurrency.exchangeRate,
            baseCurrency.exchangeRate
          );
          return result;
        }
        return 0;
      })
    );

    this.baseCurrency$ = this.getBaseCurrency().pipe(
      map((baseCurrency) => {
        if (baseCurrency) {
          return baseCurrency.currency;
        }
        return null;
      })
    );
  }

  getBaseCurrency(): Observable<BaseCurrencyInterface | null> {
    return this.communicationService.getBaseCurrency().pipe(
      shareReplay({
        bufferSize: 1,
        refCount: true,
      })
    );
  }
}
