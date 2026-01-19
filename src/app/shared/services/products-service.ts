import { Injectable, signal, WritableSignal } from '@angular/core';
import { CartProduct, Product, ProductsList } from '../interfaces/Products';
import productsData from '../../products.json';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsList: WritableSignal<ProductsList> = signal<ProductsList>(productsData); // O signal que armazena a lista de produtos
  private productsInCart: WritableSignal<CartProduct[]> = signal<CartProduct[]>([]); //O signal que armazena os produtos no carrinho

  public productsInCart$ = this.productsInCart.asReadonly(); // O signal publico somente leitura para os componentes assinarem
  public productsList$ = this.productsList.asReadonly(); // O signal publico somente leitura para os componentes assinarem

  addProductToCart(productToAdd: CartProduct): void {
    // Atualiza o valor do signal productsInCart.
    // productsSignal passado por parâmetro é o valor atual do signal
    this.productsInCart.update((productsSignal) => {
      //Se o produto ainda não existe. Apenas adiciono no array e retorno
      if (!productsSignal.some((item) => item.id === productToAdd.id)) {
        return [...productsSignal, productToAdd];
      }

      // Se o produto já existe, atualizo a quantidade e o totalPrice e retorno o array atualizado
      return productsSignal.map((p) =>
        p.id === productToAdd.id
          ? {
              ...p,
              quantity: p.quantity + 1,
              totalPrice: p.unitPrice * (p.quantity + 1),
            }
          : p,
      );
    });
  }

  removeProductFromCart(productToRemove: CartProduct): void {
    //Atualizo o productsInCart removendo os produtos via update
    this.productsInCart.update((productsSignal) =>
      // Atualizo as quantidades e preços totais com map
      productsSignal
        .map((p) =>
          p.id === productToRemove.id // Se o produto atual for o produto a ser removido
            ? { ...p , quantity: p.quantity - 1, totalPrice: p.unitPrice * (p.quantity - 1) }
            : p,
        // Removo os produtos com quantidade 0 com filter
        ).filter(p => p.quantity > 0)
    );
  }
}
