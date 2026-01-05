import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared/modules/shared/shared-module';
import { ProductList } from "./product-list/product-list.component";
import { CartComponent } from "./cart/cart.component";

@Component({
  selector: 'app-store',
  imports: [
    SharedModule,
    ProductList,
    CartComponent
],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent implements OnInit {
  
  @ViewChild('cartComponent', { static: false }) cartComponent!: CartComponent;
  constructor(){}

  height!: number;
  isCartOpen = signal(false);

  ngOnInit(): void {
    this.updateContainerHeight();
    window.addEventListener('resize', () => this.updateContainerHeight());
  }

  updateContainerHeight(): void {
    const header: number = 170;
    this.height = window.innerHeight - header;
  }

  openCart(): void {
    this.isCartOpen.set(true);
  }

}
