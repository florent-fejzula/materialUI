import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material/material.module';
import { DialogExampleComponent } from './home/dialog-example/dialog-example.component';
import { SortTableComponent } from './home/sort-table/sort-table.component';
import { SidenavComponent } from './home/sidenav/sidenav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkScrollComponent } from './home/cdk-scroll/cdk-scroll.component';
import { FeaturesComponent } from './features/features.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GuardsModule } from './guards/guards/guards.module';
import { HttpClientModule } from '@angular/common/http';
import { DirectivesModule } from '../directives/directives.module';
import { DirectivesPipesComponent } from './features/directives-pipes/directives-pipes.component';
import { CommunicationComponent } from './features/communication/communication.component';
import { RouteParamsComponent } from './features/route-params/route-params.component';
import { CustomLibraryComponent } from './features/custom-library/custom-library.component';
import { DodiLibModule } from 'dodiLib';
import { FilterStudentPipe } from '../pipes/custom-student.pipe';
import { PercentagePipe } from '../pipes/percentage.pipe';
import { LifecycleHooksComponent } from './features/lifecycle-hooks/lifecycle-hooks.component';
import { ChildComponent as LifecycleChild } from './features/lifecycle-hooks/child/child.component';
import { ChildComponent } from './features/communication/child/child.component';
import { DumbComponent } from './features/communication/dumb/dumb.component';
import { SmartComponent } from './features/communication/smart/smart.component';
import { Child2Component } from './features/communication/child2/child2.component';
import { RouteParamsDetailComponent } from './features/route-params/route-params-detail/route-params-detail.component';
import { ParentOneComponent } from './features/route-params/parent-one/parent-one.component';
import { ParentOneChildOneComponent } from './features/route-params/parent-one-child-one/parent-one-child-one.component';
import { ParentTwoComponent } from './features/route-params/parent-two/parent-two.component';
import { ParentTwoChildOneComponent } from './features/route-params/parent-two-child-one/parent-two-child-one.component';
import { ParentTwoChildTwoComponent } from './features/route-params/parent-two-child-two/parent-two-child-two.component';
import { ParentOneChildTwoComponent } from './features/route-params/parent-one-child-two/parent-one-child-two.component';
import { TestComponent } from './features/test/test.component';
import { HttpComponent } from './features/http/http.component';
import { JavascriptComponent } from './features/javascript/javascript.component';
import { CallbacksComponent } from './features/callbacks/callbacks.component';
import { UnitTestsComponent } from './features/unit-tests/unit-tests.component';

const components = [
  DialogExampleComponent,
  SortTableComponent,
  SidenavComponent,
  CdkScrollComponent,
  FeaturesComponent,
  HomeComponent,
  FormsComponent,
  RxjsComponent,
  PageNotFoundComponent,
  FilterStudentPipe,
  PercentagePipe,
  DirectivesPipesComponent,
  CommunicationComponent,
  RouteParamsComponent,
  CustomLibraryComponent,
  LifecycleHooksComponent,
  LifecycleChild,
  ChildComponent,
  DumbComponent,
  SmartComponent,
  Child2Component,
  RouteParamsDetailComponent,
  ParentOneComponent,
  ParentOneChildOneComponent,
  ParentOneChildTwoComponent,
  ParentTwoComponent,
  ParentTwoChildOneComponent,
  ParentTwoChildTwoComponent,
  TestComponent,
  HttpComponent,
  JavascriptComponent,
  CallbacksComponent,
  UnitTestsComponent
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
    HttpClientModule,
    DirectivesModule,
    DodiLibModule
  ],
  exports: [components]
})
export class ComponentsModule { }
