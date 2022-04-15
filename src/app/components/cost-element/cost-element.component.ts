import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CostInterface, CostType } from 'src/app/models';

@Component({
  selector: 'app-cost-element',
  templateUrl: './cost-element.component.html',
  styleUrls: ['./cost-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CostElementComponent {
  @Input('cost') cost: CostInterface | undefined;

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

  get totalScreened(): number {
    if (this.cost) {
      return this.cost?.costItems.reduce((total, costItem) => {
        return (
          total +
          costItem.costs.reduce((total, cost) => {
            if (cost.type === CostType.Screened) {
              return total + cost.amount;
            }
            return total;
          }, 0)
        );
      }, 0);
    }
    return 0;
  }
}
