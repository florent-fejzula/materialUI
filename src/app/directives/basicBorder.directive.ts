import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicBorder]'
})
export class BasicBorderDirective {
  private htmlElement: HTMLElement;

  constructor(element: ElementRef) {
    this.htmlElement = element.nativeElement;
    this.htmlElement.style.border = '1px solid black';
    this.htmlElement.style.padding = '10px';
  }

}
