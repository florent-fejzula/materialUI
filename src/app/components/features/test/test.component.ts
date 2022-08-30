import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  // trackBy with ngFor, to not refresh DOM elements whose value is not changed
  users = [
    {id: 1, name: 'Harry'},
    {id: 2, name: 'Ron'},
    {id: 3, name: 'Hermione'},
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

  // trackBy ngFor
  refresh() {
    this.users = [
      {id: 1, name: 'Harry'},
      {id: 2, name: 'Dumbledore'},
      {id: 4, name: 'Snape'},
    ];
  }

  // trackBy ngFor
  trackByUser(index: number, item: any) {
    // return index;
    return item.id;
  }

}
