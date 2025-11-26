import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePromotionComponent } from './price-promotion-component';

describe('PricePromotionComponent', () => {
  let component: PricePromotionComponent;
  let fixture: ComponentFixture<PricePromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricePromotionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricePromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
