import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostConvertedComponent } from './cost-converted.component';

describe('CostConvertedComponent', () => {
  let component: CostConvertedComponent;
  let fixture: ComponentFixture<CostConvertedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostConvertedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostConvertedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
