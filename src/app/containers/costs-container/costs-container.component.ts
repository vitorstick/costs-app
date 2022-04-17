import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { CostViewModel, ExchangeRateInterface } from 'src/app/models';
import { CostsService } from 'src/app/services';

@Component({
  selector: 'app-costs-container',
  templateUrl: './costs-container.component.html',
})
export class CostsContainerComponent implements OnInit {
  costElement!: CostViewModel;
  exchangeRates$!: Observable<ExchangeRateInterface>;

  constructor(
    private costsService: CostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.costElement = this.route.snapshot.data.costs;
    this.exchangeRates$ = this.getExchangesRates();
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
