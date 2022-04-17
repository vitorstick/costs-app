import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ExchangeRateInterface } from '../models';
import { CostsService } from './costs.service';

@Injectable({
  providedIn: 'root',
})
export class RateResolver implements Resolve<ExchangeRateInterface> {
  constructor(private costsService: CostsService) {}

  resolve(): Observable<ExchangeRateInterface> {
    return this.costsService.getExchangesRates();
  }
}
