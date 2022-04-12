import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CostViewModel, ExchangeRateInterface } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CostsService {
  private costsJsonUrl = 'assets/costs.json';
  private exRatesJsonUrl = 'assets/exchange-rates.json';

  constructor(private http: HttpClient) {}

  public getCosts(): Observable<CostViewModel> {
    return this.http.get<CostViewModel>(this.costsJsonUrl);
  }

  public getExchangesRates(): Observable<ExchangeRateInterface> {
    return this.http.get<ExchangeRateInterface>(this.exRatesJsonUrl);
  }
}
