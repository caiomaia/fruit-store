import { Component, inject, Signal } from '@angular/core';
import { ProductCard } from "./product-card/product-card.component";
import { SharedModule } from '../../../shared/modules/shared/shared-module';
import { ProductsList } from '../../../shared/interfaces/Products';
import { ProductsService } from '../../../shared/services/products-service';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard, SharedModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductList {
  constructor() {}

  private productsService = inject(ProductsService)

  height!: number;
  productsList$: Signal<ProductsList> = this.productsService.productsList$;
  
}
