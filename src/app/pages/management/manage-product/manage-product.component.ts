import { Component, effect, input, output, viewChild, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/modules/shared/shared-module';
import { PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-manage-product',
  imports: [SharedModule],
  templateUrl: './manage-product.component.html',
  styleUrl: './manage-product.component.scss',
})
export class ManageProductComponent {
  //@ViewChild('manageModal', {static: true}) manageModal!: PoModalComponent;
  readonly manageModal = viewChild.required<PoModalComponent>('manageModal');

  readonly open = input(false);
  readonly closed = output<void>();

  constructor() {
    effect(() => {
      const modal = this.manageModal();
      this.open()
        ? modal.open()
        : modal.close();
    });
  }

  onModalClose(): void {
    this.closed.emit();
  }
}
