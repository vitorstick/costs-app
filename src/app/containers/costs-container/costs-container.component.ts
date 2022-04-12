import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {
  CostInterface,
  CostViewModel,
  ExchangeRateInterface,
} from 'src/app/models';
import { CostsService } from 'src/app/services';

@Component({
  selector: 'app-costs-container',
  templateUrl: './costs-container.component.html',
})
export class CostsContainerComponent implements OnInit {
  costElement$!: Observable<CostViewModel>;
  exchangeRates$!: Observable<ExchangeRateInterface>;

  constructor(private costsService: CostsService) {}

  ngOnInit() {
    this.costElement$ = this.getCosts();
    this.exchangeRates$ = this.getExchangesRates();
  }

  private getCosts(): Observable<CostViewModel> {
    return this.costsService.getCosts().pipe(
      shareReplay({
        bufferSize: 1,
        refCount: true,
      })
    );
  }

  private getExchangesRates(): Observable<ExchangeRateInterface> {
    return this.costsService.getExchangesRates().pipe(
      shareReplay({
        bufferSize: 1,
        refCount: true,
      })
    );
  }
}
