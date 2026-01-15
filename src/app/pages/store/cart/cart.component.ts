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


}
