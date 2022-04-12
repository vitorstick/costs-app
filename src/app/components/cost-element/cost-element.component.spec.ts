import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostElementComponent } from './cost-element.component';

describe('CostElementComponent', () => {
  let component: CostElementComponent;
  let fixture: ComponentFixture<CostElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
