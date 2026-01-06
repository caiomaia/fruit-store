import { Injectable, signal, WritableSignal } from '@angular/core';
import { ProductsList } from '../interfaces/Products';
import productsData from '../../products.json';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsList: WritableSignal<ProductsList> = signal<ProductsList>(productsData); // O signal que armazena a lista de produtos
  private productsInCart: WritableSignal<ProductsList> = signal<ProductsList>({products: []}); //O signal que armazena os produtos no carrinho

  public productsInCart$ = this.productsInCart.asReadonly(); // O signal publico somente leitura para os componentes assinarem
  public productsList$ = this.productsList.asReadonly(); // O signal publico somente leitura para os componentes assinarem
  
}
