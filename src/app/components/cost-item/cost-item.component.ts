import { Component, Input, OnInit } from '@angular/core';
import {
  BaseCurrencyInterface,
  CommentInterface,
  CostItemInterface,
  DaCurrencyInterface,
} from 'src/app/models';

@Component({
  selector: 'app-cost-item',
  templateUrl: './cost-item.component.html',
  styleUrls: ['./cost-item.component.scss'],
})
export class CostItemComponent implements OnInit {
  @Input('costItem') costItem: CostItemInterface | undefined;
  @Input('baseCurrency') baseCurrency: BaseCurrencyInterface | undefined;
  @Input('daCurrency') daCurrency: DaCurrencyInterface | undefined;

  get commentsNumber(): number {
    return this.costItem?.comments?.length ?? 0;
  }

  get comments(): CommentInterface[] {
    return this.costItem?.comments ?? [];
  }

  constructor() {}

  ngOnInit(): void {}
}
