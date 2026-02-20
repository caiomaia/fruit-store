import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Host, HostListener, OnInit, signal, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared/modules/shared/shared-module';
import { ProductList } from "./product-list/product-list.component";
import { CartComponent } from "./cart/cart.component";

@Component({
  selector: 'app-store',
  imports: [
    SharedModule,
    ProductList
    // CartComponent
],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent implements AfterViewInit {
  constructor(private cdr: ChangeDetectorRef){}

  // @ViewChild('cartComponent', { static: false }) cartComponent!: CartComponent;
  @ViewChild('storeHeader') headerRef!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    this.updateContainerHeight();
  }

  height: number = 0;
  // isCartOpen = signal(false);

  @HostListener('window:resize')
  onResize(): void {
    this.updateContainerHeight();
  }

  updateContainerHeight(): void {
    if (!this.headerRef) return;

    const headerHeight = this.headerRef.nativeElement.offsetHeight;
    this.height = window.innerHeight - headerHeight;
    this.cdr.detectChanges(); // Ensure the view updates with the new height value
  }

  // openCart(): void {
  //   this.isCartOpen.set(true);
  // }

}
