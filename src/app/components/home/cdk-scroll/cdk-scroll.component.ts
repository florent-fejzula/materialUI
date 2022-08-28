import { Component } from '@angular/core';

@Component({
  selector: 'app-cdk-scroll',
  templateUrl: './cdk-scroll.component.html',
  styleUrls: ['./cdk-scroll.component.scss']
})
export class CdkScrollComponent {
  items = Array.from({length: 50000}).map((value, i) => `Item #${i}`);
  
  constructor() { }

}
