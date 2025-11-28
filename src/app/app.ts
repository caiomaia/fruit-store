import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarAction,
  PoToolbarModule,
} from '@po-ui/ng-components';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    RouterModule
],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Loja', link: 'store', icon: 'an an-basket', shortLabel: 'Loja' },
    { label: 'Gerenciar produtos', link: 'management', icon: 'an an-book-open-text', shortLabel: 'Gerenciar' },
  ];

}
