import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FancyTextDirective } from './fancyText.directive';
import { BasicBorderDirective } from './basicBorder.directive';



@NgModule({
  declarations: [
    FancyTextDirective,
    BasicBorderDirective
   ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    FancyTextDirective,
    BasicBorderDirective
  ]
})
export class DirectivesModule { }
