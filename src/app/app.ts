import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarAction,
  PoToolbarModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Loja', action: this.onClick.bind(this), icon: 'an an-basket', shortLabel: 'Loja' },
    { label: 'Gerenciar produtos', action: this.onClick.bind(this), icon: 'an an-book-open-text', shortLabel: 'Gerenciar' },
  ];

  private onClick() {
    alert('Clicked in menu item');
  }

}
