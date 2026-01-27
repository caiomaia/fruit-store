import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { PoMenuItem, PoMenuModule, PoPageModule, PoToolbarAction, PoToolbarModule, PoHeaderModule } from '@po-ui/ng-components';
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./shared/components/header.component/header.component";
import { SharedModule } from './shared/modules/shared/shared-module';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HeaderComponent
],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {

}
