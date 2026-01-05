import { Component, OnInit } from '@angular/core';
import { ProductCard } from "./product-card/product-card.component";
import productsData from '../../../products.json';
import { SharedModule } from '../../../shared/modules/shared/shared-module';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard, SharedModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductList {
  constructor() {}

  height!: number;
  productsList = productsData;
  
}
