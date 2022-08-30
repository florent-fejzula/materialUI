import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

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

  // forkJoin example, 3 Observables emitting at different times
  getWidgetOneData() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(23);
        observer.complete();
      }, 5000);
    });
  }

  getWidgetTwoData() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(15);
        observer.complete();
      }, 1000);
    });
  }

  getWidgetThreeData() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(45);
        observer.complete();
      }, 3000);
    });
  }

  // forkJoin, combine 3 Observables emitting at different times, to emit once all are ready
  getAllData() {
    let observableOne = new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(23);
        observer.complete();
      }, 5000);
    });
    let observableTwo = new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(15);
        observer.complete();
      }, 1000);
    });
    let observableThree = new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(45);
        observer.complete();
      }, 3000);
    });

    return forkJoin([observableOne, observableTwo, observableThree]);
  }

}
