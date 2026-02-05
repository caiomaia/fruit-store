import { Component, signal, ViewChild } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared-module';
import { PoHeaderActionTool, PoMenuItem } from '@po-ui/ng-components';
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

  readonly menus: PoMenuItem[] = [
    { label: 'Loja', link: 'store', icon: 'an an-basket', shortLabel: 'Loja' },
    { label: 'Gerenciar produtos', link: 'management', icon: 'an an-book-open-text', shortLabel: 'Gerenciar' },
  ];

  readonly actionTools: PoHeaderActionTool[] = [
    {
      label: 'Carrinho',
      icon: 'an an-basket',
      tooltip: 'Abrir carrinho',
      action: () => this.isCartOpen.set(true)
    }
  ]

}
