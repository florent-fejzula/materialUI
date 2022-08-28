import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFancyText]'
})
export class FancyTextDirective {
  private htmlElement: HTMLElement;

  constructor(element: ElementRef) {
    this.htmlElement = element.nativeElement;
    this.htmlElement.style.color = 'beige';
    this.htmlElement.style.backgroundColor = 'darkcyan';
  }

}
