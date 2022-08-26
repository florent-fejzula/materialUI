import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material/material.module';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { SortTableComponent } from './sort-table/sort-table.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkScrollComponent } from './cdk-scroll/cdk-scroll.component';
import { FeaturesComponent } from './features/features.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GuardsModule } from './guards/guards/guards.module';
import { HttpClientModule } from '@angular/common/http';

const components = [
  DialogExampleComponent,
  SortTableComponent,
  SidenavComponent,
  CdkScrollComponent,
  FeaturesComponent,
  HomeComponent,
  FormsComponent,
  RxjsComponent,
  PageNotFoundComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    GuardsModule,
    HttpClientModule
  ],
  exports: [components]
})
export class ComponentsModule { }
