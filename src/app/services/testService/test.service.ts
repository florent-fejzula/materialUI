import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  serviceName = 'Test Service!';
  itemsList = [
    {
      id: 1,
      name: 'item1',
    },
    {
      id: 2,
      name: 'item2',
    },
    {
      id: 3,
      name: 'item3',
    }
  ];

  constructor() { }
}
