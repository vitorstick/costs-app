import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { CalculationHelper } from 'src/app/helpers/calculation-helper';
import {
  BaseCurrencyInterface,
  CostInterface,
  CostViewModel,
  ExchangeRateInterface,
  PaymentCurrenciesInterface,
} from 'src/app/models';
import { CommunicationService } from 'src/app/services';

@Component({
  selector: 'app-cost-table',
  templateUrl: './cost-table.component.html',
  styleUrls: ['./cost-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CostTableComponent implements OnChanges {
  get costs(): CostViewModel {
    return this._costs;
  }
  @Input('costs')
  set costs(items: CostViewModel) {
    if (items) {
      this._costs = items;
    }
  }

  @Input('exchangeRates')
  set exchangeRates(rates: ExchangeRateInterface | null) {
    if (rates) {
      this._exchangeRates = rates;
    }
  }

  get baseCurrency(): BaseCurrencyInterface {
    return this._costs.baseCurrency;
  }

  get paymentCurrencies(): PaymentCurrenciesInterface[] {
    return this._exchangeRates?.paymentCurrencies ?? [];
  }

  get costElements(): CostInterface[] {
    return this._costs?.costs;
  }

  get exchangeRate(): number {
    // if (this._costs) {
    //   return CalculationHelper.getValue(
    //     1,
    //     this._costs.baseCurrency.exchangeRate
    //   );
    // }
    return 0;
  }

  rateForm!: FormGroup;
  selectedPaymentCurrencies!: PaymentCurrenciesInterface | null;

  private _costs!: CostViewModel;
  private _exchangeRates!: ExchangeRateInterface;
  protected destroyed$ = new Subject<void>();

  constructor(private communicationService: CommunicationService) {}

  ngOnChanges() {
    if (this._costs && this._exchangeRates) {
      this.createRateForm(this._costs.daCurrency.currency);
    }
  }

  private createRateForm(currency: string) {
    this.rateForm = new FormGroup({
      rate: new FormControl(currency),
    });
    this.observeRateFormChanges();
  }

  private observeRateFormChanges() {
    this.rateForm.valueChanges
      .pipe(startWith(this.rateForm.value), takeUntil(this.destroyed$))
      .subscribe((value) => {
        const chosenRate = value.rate;
        const chosenPaymentCurrency = this.paymentCurrencies.find(
          (currency) => currency.toCurrency === chosenRate
        );

        this.selectedPaymentCurrencies = chosenPaymentCurrency ?? null;
        this.setCommunicationServiceChosenPaymentCurrency();
      });
  }

  private setCommunicationServiceChosenPaymentCurrency() {
    if (this.selectedPaymentCurrencies) {
      this.communicationService.setFormForSplitExpense(
        this.selectedPaymentCurrencies
      );
    }
  }
}
