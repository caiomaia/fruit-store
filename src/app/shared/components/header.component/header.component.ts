import { Component, signal, ViewChild } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared-module';
import { PoHeaderActionTool, PoMenuItem, PoToolbarAction } from '@po-ui/ng-components';
import { CartComponent } from '../../../pages/store/cart/cart.component';

@Component({
  selector: 'app-header',
  imports: [SharedModule, CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor() {}

  @ViewChild('cartComponent', { static: false }) cartComponent!: CartComponent;
  isCartOpen = signal(false);

  // private productsService = inject(ProductsService)
  // cartBadgeNumber$ = this.productsService.numberItensInCart$;

  readonly action: PoToolbarAction[] = [
    {
      label: 'Abrir carrinho',
      icon: 'an an-basket',
      action: () => this.isCartOpen.set(true)
    }
  ]

}
