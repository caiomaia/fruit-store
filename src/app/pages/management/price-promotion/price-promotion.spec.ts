import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePromotion } from './price-promotion';

describe('PricePromotion', () => {
  let component: PricePromotion;
  let fixture: ComponentFixture<PricePromotion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricePromotion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricePromotion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
