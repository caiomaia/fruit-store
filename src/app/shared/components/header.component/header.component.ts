import { Component, computed, inject, Signal } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared-module';
import { PoHeaderActionTool, PoMenuItem } from '@po-ui/ng-components';
import { ProductsService } from '../../services/products-service';

@Component({
  selector: 'app-header',
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor() {}

  private productsService = inject(ProductsService)

  cartBadgeNumber$ = this.productsService.numberItensInCart$;

  readonly menus: PoMenuItem[] = [
    { label: 'Loja', link: 'store', icon: 'an an-basket', shortLabel: 'Loja' },
    { label: 'Gerenciar produtos', link: 'management', icon: 'an an-book-open-text', shortLabel: 'Gerenciar' },
  ];

  readonly actionTools$ = computed<PoHeaderActionTool[]>(() => [
    {
      label: 'Carrinho',
      icon: 'an an-basket',
      tooltip: 'Abrir carrinho',
      badge: this.cartBadgeNumber$()
    }
  ])

}
