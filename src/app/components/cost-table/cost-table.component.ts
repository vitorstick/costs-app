import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  CostInterface,
  CostViewModel,
  ExchangeRateInterface,
  PaymentCurrenciesInterface,
} from 'src/app/models';

@Component({
  selector: 'app-cost-table',
  templateUrl: './cost-table.component.html',
  styleUrls: ['./cost-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CostTableComponent implements OnInit {
  rateForm!: FormGroup;

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
      this.createRateForm(rates);
    }
  }

  get paymentCurrencies(): PaymentCurrenciesInterface[] {
    return this._exchangeRates.paymentCurrencies ?? [];
  }

  get costElements(): CostInterface[] {
    return this._costs.costs;
  }

  private _costs!: CostViewModel;
  private _exchangeRates!: ExchangeRateInterface;

  constructor() {}

  ngOnInit(): void {}

  private createRateForm(rates: ExchangeRateInterface) {
    this.rateForm = new FormGroup({
      rate: new FormControl(''),
    });
  }
}
