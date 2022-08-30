import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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

  // DOM Sanitizer
  searchKey: any;

  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {}

  // trackBy ngFor
  refresh() {
    this.users = [
      {id: 1, name: 'Harry'},
      {id: 2, name: 'Dumbledore'},
      {id: 4, name: 'Snape'},
    ];
  }

  trackByUser(index: number, item: any) {
    // return index;
    return item.id;
  }

  // DOM Sanitizer
  search(searchText: any) {
    // this.searchKey = searchText.value;
    this.searchKey = this.domSanitizer.bypassSecurityTrustHtml(searchText.value);
  }

}
