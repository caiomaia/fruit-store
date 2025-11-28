import { Component, OnInit } from '@angular/core';
import { ProductCard } from "./product-card/product-card";
import productsData from '../../../products.json';
import { SharedModule } from '../../../shared/modules/shared/shared-module';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard, SharedModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  constructor() {}

  height!: number;
  productsList = productsData;
  
}
