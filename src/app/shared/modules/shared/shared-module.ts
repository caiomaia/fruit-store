import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoComponentsModule } from '@po-ui/ng-components';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PoComponentsModule
  ],
  exports: [
    CommonModule,
    PoComponentsModule
  ]
})
export class SharedModule { }
