import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../modules/material/material.module';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { SortTableComponent } from './sort-table/sort-table.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { CdkScrollComponent } from './cdk-scroll/cdk-scroll.component';

const components = [
  NavbarComponent,
  DialogExampleComponent,
  SortTableComponent,
  SidenavComponent,
  CdkScrollComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [components]
})
export class ComponentsModule { }
