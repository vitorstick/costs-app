import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CostViewModel, ExchangeRateInterface } from 'src/app/models';

@Component({
  selector: 'app-costs-container',
  templateUrl: './costs-container.component.html',
})
export class CostsContainerComponent implements OnInit {
  costElement!: CostViewModel;
  exchangeRates!: ExchangeRateInterface;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.costElement = this.route.snapshot.data.costs;
    this.exchangeRates = this.route.snapshot.data.exchangeRates;
  }
}
