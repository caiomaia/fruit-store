import { Component, input } from '@angular/core';
import { SharedModule } from '../../../../shared/modules/shared/shared-module';

@Component({
  selector: 'app-product-card',
  imports: [SharedModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {

  productId = input<number>(0);
  productName = input<string>('');
  productUnitPrice = input<number>(0);
  productDescription = input<string>('');
  productStock = input<number>(0);
}
