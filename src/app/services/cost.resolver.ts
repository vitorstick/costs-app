import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CostViewModel } from '../models';
import { CostsService } from './costs.service';

@Injectable({
  providedIn: 'root',
})
export class CostResolver implements Resolve<CostViewModel> {
  constructor(private costsService: CostsService) {}

  resolve(): Observable<CostViewModel> {
    return this.costsService.getCosts();
  }
}
