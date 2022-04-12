/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CostsService } from './costs.service';

describe('Service: Costs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CostsService]
    });
  });

  it('should ...', inject([CostsService], (service: CostsService) => {
    expect(service).toBeTruthy();
  }));
});
