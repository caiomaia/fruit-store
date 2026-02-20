import { ManageProduct, Product } from './../../shared/interfaces/Products';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject, signal, Signal, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared/modules/shared/shared-module';
import { ProductsService } from '../../shared/services/products-service';
import { ProductsList } from '../../shared/interfaces/Products';
import { PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { ManageProductComponent } from "./manage-product/manage-product.component";

@Component({
  selector: 'app-management',
  imports: [SharedModule, ManageProductComponent],
  templateUrl: './management.component.html',
  styleUrl: './management.component.scss',
})
export class ManagementComponent implements AfterViewInit {
  constructor(private cdr: ChangeDetectorRef){}

  @ViewChild('managementHeader') headerRef!: ElementRef<HTMLElement>;
  @ViewChild('manageProductComponent', {static: false}) manageProductComponent!: ManageProductComponent;
  private productsService = inject(ProductsService)
  isManageModalOpen = signal(false);

  productsList$: Signal<ProductsList> = this.productsService.productsList$;
  heightTable: number = 0;

  productTableColumns: PoTableColumn[] = [
    { property: 'id', label: 'ID', type: 'number'},
    { property: 'name', label: 'Nome do produto', type: 'string'},
    { property: 'category', label: 'Categoria do produto', type: 'string'},
    { property: 'unitPrice', label: 'Preço unitário', type: 'currency', format: 'BRL'},
    { property: 'stock', label: 'Quantidade em estoque', type: 'number'}
  ]

  productTableActions: PoTableAction[] = [
    { label: 'Gerenciar', icon: 'an an-pencil', action: this.manageProduct.bind(this) },
    { label: 'Deletar', icon: 'an an-trash'}
  ]

  ngAfterViewInit(): void {
    this.updateTableHeight();
  }

  updateTableHeight(): void {
    if (!this.headerRef) return;

    const headerHeight = this.headerRef.nativeElement.offsetHeight;
    this.heightTable = window.innerHeight - headerHeight;
    this.cdr.detectChanges(); // Ensure the view updates with the new heightTable value
  }

  manageProduct(item: Product): void {

    this.isManageModalOpen.set(true)
  }
}
