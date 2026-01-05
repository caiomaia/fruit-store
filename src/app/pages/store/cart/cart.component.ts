import { Component, effect, input, output, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/modules/shared/shared-module';
import { PoPageSlideComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-cart',
  imports: [SharedModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  @ViewChild('cartSlide', {static: true}) cartSlide!: PoPageSlideComponent;

  open = input<boolean>(false);
  closed = output<void>();

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
