import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CalculationHelper } from 'src/app/helpers/calculation-helper';

@Component({
  selector: 'app-cost-converted',
  templateUrl: './cost-converted.component.html',
  styleUrls: ['./cost-converted.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CostConvertedComponent implements OnInit {
  @Input('costValue') costValue: number = 0;

  constructor() {}

  ngOnInit(): void {}

  getExchangeRateValue(rate: number): number {
    return CalculationHelper.getValue(this.costValue, rate);
  }
}
