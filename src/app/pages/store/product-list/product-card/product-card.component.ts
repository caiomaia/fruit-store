import { Component, inject, input } from '@angular/core';
import { SharedModule } from '../../../../shared/modules/shared/shared-module';
import { ProductsService } from '../../../../shared/services/products-service';

@Component({
  selector: 'app-product-card',
  imports: [SharedModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCard {

  private productsService = inject(ProductsService);

  productId = input<number>(0);
  productName = input<string>('');
  productUnitPrice = input<number>(0);
  productDescription = input<string>('');
  productStock = input<number>(0);
  productImage = input<string>('');

  addToCart(): void {
    this.productsService.addProductToCart({
      id: this.productId(),
      name: this.productName(),
      unitPrice: this.productUnitPrice(),
      quantity: 1,
      pathImage: this.productImage(),
      totalPrice: this.productUnitPrice()
    })
  }
}
