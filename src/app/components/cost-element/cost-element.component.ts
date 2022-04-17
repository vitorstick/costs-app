import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChildren,
  QueryList,
} from '@angular/core';
import {
  BaseCurrencyInterface,
  CostInterface,
  CostType,
  PaymentCurrenciesInterface,
} from 'src/app/models';
import { CostItemComponent } from '../cost-item/cost-item.component';

@Component({
  selector: 'app-cost-element',
  templateUrl: './cost-element.component.html',
  styleUrls: ['./cost-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CostElementComponent {
  @Input('cost') cost: CostInterface | undefined;
  @Input('selectedPaymentCurrencies')
  selectedPaymentCurrencies: PaymentCurrenciesInterface | null = null;

  @ViewChildren(CostItemComponent) costItems!: QueryList<CostItemComponent>;

  get totalQuoted(): number {
    if (this.cost) {
      return this.cost?.costItems.reduce((total, costItem) => {
        return (
          total +
          costItem.costs.reduce((total, cost) => {
            if (cost.type === CostType.Quoted) {
              return total + cost.amount;
            }
            return total;
          }, 0)
        );
      }, 0);
    }
    return 0;
  }

  get totalScreenedForm(): number {
    if (this.costItems) {
      return this.costItems.reduce((total, costItem) => {
        return total + costItem.screenedCostFromForm;
      }, 0);
    }

    return 0;
  }
}
