import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.scss']
})
export class ParentOneComponent implements DoCheck {
  stringArrayParent: any[] = [];

  constructor() { }

  ngDoCheck() {
    console.log('Parent One change detection');
  }

  onClick() {
    this.stringArrayParent.push('Parenttt');
  }

}
