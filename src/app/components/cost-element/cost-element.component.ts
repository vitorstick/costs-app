import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  CostInterface,
  CostItemCostInterface,
  CostType,
  PaymentCurrenciesInterface,
} from 'src/app/models';

@Component({
  selector: 'app-cost-element',
  templateUrl: './cost-element.component.html',
  styleUrls: ['./cost-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CostElementComponent implements OnInit {
  @Input('cost') cost: CostInterface | undefined;
  @Input() selectedPaymentCurrencies: PaymentCurrenciesInterface | null = null;

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
    return (
      this.screenedCostsForm.get('costItems') as FormArray
    ).controls.reduce((total, costItem) => {
      console.log(costItem);
      return total + costItem?.get('screenedCost')?.value ?? 0;
    }, 0);
  }

  screenedCostsForm!: FormGroup;

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  getCostsFormArray(index: number) {
    return (this.screenedCostsForm.get('costItems') as FormArray).at(index);
  }

  private createForm() {
    this.screenedCostsForm = this.formbuilder.group({
      costItems: this.formbuilder.array([]),
    });

    if (this.cost) {
      this.cost.costItems.forEach((costItem) => {
        const screenedCosts = costItem.costs.filter(
          (cost) => cost.type === CostType.Screened
        );

        screenedCosts.forEach((costItem) => {
          (this.screenedCostsForm.get('costItems') as FormArray).push(
            this.createScreenedCostForm(costItem)
          );
        });
      });
    }
  }

  private createScreenedCostForm(
    screenedCost: CostItemCostInterface
  ): FormGroup {
    return new FormGroup({
      screenedCost: new FormControl(screenedCost.amount, Validators.required),
    });
  }
}
