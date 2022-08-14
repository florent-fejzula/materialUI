import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../modules/material/material.module';

const components = [
  NavbarComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [components]
})
export class ComponentsModule { }
