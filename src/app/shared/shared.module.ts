import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ChartComponent } from './chart/chart.component';
import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';

const SHARED_MODULES = [
  CommonModule,
  DragDropModule
];

const SHARED_DECLARATIONS = [
  ChartComponent,
  ListComponent,
  NavbarComponent
];

@NgModule({
  imports: SHARED_MODULES,
  declarations: SHARED_DECLARATIONS,
  exports: [
    ...SHARED_MODULES,
    ...SHARED_DECLARATIONS
  ]
})
export class SharedModule { }
