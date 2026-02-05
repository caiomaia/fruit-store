import { Component, effect, inject, input, output, Signal, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/modules/shared/shared-module';
import { PoPageSlideComponent } from '@po-ui/ng-components';
import { ProductsService } from '../../../shared/services/products-service';
import { CartProduct, ProductsList } from '../../../shared/interfaces/Products';

@Component({
  selector: 'app-cart',
  imports: [SharedModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {

  private productsService = inject(ProductsService);

  @ViewChild('cartSlide', {static: true}) cartSlide!: PoPageSlideComponent;

  open = input<boolean>(false);
  closed = output<void>();
  productsInCart$: Signal<CartProduct[]> = this.productsService.productsInCart$; // Recebe o signal readOnly do carrinho
  numberItensInCart$: Signal<number> = this.productsService.numberItensInCart$;
  totalPriceInCart$ = this.productsService.totalPriceInCart$;

  constructor() {
    effect(() => {
      if (this.open()) {
        this.cartSlide.open();
      }
    })
  }

  closeCart(): void {
    this.closed.emit();
  }

  // TO-DO: Componentizar os botões do produto (add e remove)
  addToCart(cartProduct: CartProduct): void {
    this.productsService.addProductToCart({
      id: cartProduct.id,
      name: cartProduct.name,
      unitPrice: cartProduct.unitPrice,
      quantity: cartProduct.quantity,
      pathImage: cartProduct.pathImage,
      totalPrice: cartProduct.totalPrice
    })
  }

  removeFromCart(cartProduct: CartProduct): void {
    this.productsService.removeProductFromCart({
      id: cartProduct.id,
      name: cartProduct.name,
      unitPrice: cartProduct.unitPrice,
      quantity: cartProduct.quantity,
      pathImage: cartProduct.pathImage,
      totalPrice: cartProduct.totalPrice
    })
  }

}
