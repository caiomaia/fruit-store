import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/modules/shared/shared-module';
import { ProductList } from "./product-list/product-list";

@Component({
  selector: 'app-store',
  imports: [
    SharedModule, 
    ProductList
  ],
  templateUrl: './store.html',
  styleUrl: './store.scss',
})
export class Store implements OnInit {
  constructor(){}

  height!: number;

  ngOnInit(): void {
    this.updateContainerHeight();
    window.addEventListener('resize', () => this.updateContainerHeight());
  }

  updateContainerHeight(): void {
    const header: number = 170;
    this.height = window.innerHeight - header;
  }

}
