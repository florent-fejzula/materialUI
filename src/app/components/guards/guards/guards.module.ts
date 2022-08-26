import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GuardsComponent } from '../guards.component';
import { FormsModule } from '@angular/forms';
import { CanDeactivateGuardService } from 'src/app/route-guards/can-deactivate-guard.service';

const contactRoute: Routes = [
  { path: '' ,canDeactivate: [CanDeactivateGuardService], component: GuardsComponent }
];

@NgModule({
  declarations: [
    GuardsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(contactRoute)
  ],
  exports: [
    GuardsComponent
  ]
})
export class GuardsModule { }
