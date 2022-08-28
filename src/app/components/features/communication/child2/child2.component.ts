import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements AfterContentInit {
  @ContentChild('paragraph') paragraphEl!: ElementRef;

  constructor() { }

  ngAfterContentInit() {
    console.log(this.paragraphEl.nativeElement.textContent);
  }

}
