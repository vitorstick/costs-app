import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-cost-total',
  templateUrl: './cost-total.component.html',
  styleUrls: ['./cost-total.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CostTotalComponent {
  @Input('totalQuoted') totalQuoted: number = 0;
  @Input('totalScreened') totalScreened: number = 0;
}
