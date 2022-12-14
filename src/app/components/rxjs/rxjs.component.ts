import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, filter, map, mergeMap, Observable, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http/http.service';
import { TestService } from 'src/app/services/testService/test.service';
import { FormControl } from '@angular/forms';

export interface Fruit {
  color: string,
  fruit: string,
  size: string
}

export interface IEmployee {
  name: string,
  username: string,
  email: string
};

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, OnDestroy {
  array1 = [1, 2, 7, 8];
  array2 = ['Y', 'R', 'T'];

  myObservable1 = new Observable((observer) => {
    console.log('Observer1 starts');
    setTimeout(() => {observer.next('1')}, 1000);
    setTimeout(() => {observer.next('2')}, 2000);
    // setTimeout(() => {observer.error(new Error('Something went wrong.'))}, 2000);
    setTimeout(() => {observer.next('3')}, 3000);
    setTimeout(() => {observer.complete()}, 4000);
  });

  myObservable2 = Observable.create((observer: { next: (arg0: string) => void; complete: () => void; }) => {
    setTimeout(() => {observer.next('A')}, 1000);
    setTimeout(() => {observer.next('B')}, 2000);
    // setTimeout(() => {observer.error(new Error('Something went wrong.'))}, 2000);
    setTimeout(() => {observer.next('C')}, 3000);
    setTimeout(() => {observer.complete()}, 4000);
  });

  myObservable = of(this.array1, this.array2);

  // from phase 1
  obsValue: any;
  employeeList: any;
  employees: any;

  myObservablePhase = new Observable((observer) => {
    console.log('ObservablePhase1 starts');
    observer.next('1');
    observer.next('2');
    observer.next('3');
    observer.next('4');
    observer.next('5');
  });

  // ForkJoin example
  schoolsCount = 0;
  hospitalsCount = 0;
  banksCount = 0;
  schoolsLoading = false;
  hospitalsLoading = false;
  banksLoading = false;

  // mergeMap vs SwitchMap operators
  searchControl = new FormControl();
  fruits: string[] = [];

  // async pipe
  countries: string[] = [];
  status = false;
  section = 'country';
  countriesObs$: any;
  statusPromise$: any;

  everySecond$ = this.createInterval$(1000);
  // subscription = this.everySecond$.subscribe(this.createSubscriber('one'));
  firstObsSubs: any;

  constructor(
    private http: HttpClient,
    private httpService: HttpService,
    private testService: TestService,
  ) {
    this.employees = this.httpService.getEmployees().subscribe((data) => {
      this.employeeList = data;
    });
  }

  ngOnInit(): void {
    this.http.get<Fruit>('./assets/exampleJson.json').subscribe((data: Fruit) => {
      // prints 'Red' in console
      // console.log(data.color);
    });

    this.myObservable.subscribe((val: any) => {
      console.log('myObservable Arrays merge: ', val);
    }, (error: { message: any; }) => {
      alert(error.message);
    }, () => {
      // alert('Observable has completed!');
      console.log('MyObservable completed!');
    });

    this.myObservablePhase.subscribe((val) => {
      console.log('myObservablePhase: ', val);
      this.obsValue = val;
    });

    console.log('Employees: ', this.employees);

    // forkJoin example
    this.schoolsLoading = true;
    this.hospitalsLoading = true;
    this.banksLoading = true;
    this.getData();

    // mergeMap vs SwitchMap
    this.searchControl.valueChanges.pipe(
      debounceTime(700),
      switchMap((searchText: string) => this.filter(searchText))
    ).subscribe((fruits: any) => {
      this.fruits = fruits
    })

    // Promise
    const promise = new Promise((resolve, reject) => {
      console.log('IN PROMISE');
      resolve('hey promise');
    });

    // promise.then(item => console.log(item));

    // const simple$ = new Observable(observer => {
    //   console.log('Generating observable');
    //   setTimeout(() => {
    //     observer.next('An Item!');
    //     setTimeout(() => {
    //       observer.next('Another Item!');
    //     observer.complete();
    //     }, 1000);
    //   }, 1000);
    // });

    // simple$.subscribe(
    //   item => console.log(`one.next ${item}`),
    //   error => console.log(`one.error ${error}`),
    //   () => console.log('one.complete')
    // );

    // example from Udemy part 1
    // setTimeout(() => {
    //   simple$.subscribe({
    //     next: item => console.log(`two.next ${item}`),
    //     error(error) {
    //       console.log(`two.error ${error}`);
    //     },
    //     complete: function() {
    //       console.log('two.complete');
    //     }
    //   });
    // }, 3000);

    // Udemy part 2
    // setTimeout(() => {
    //   this.subscription.unsubscribe();
    // }, 3000);

    // Udemy complete example
    const customIntervalObs = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count === 2) {
          observer.complete();
        }
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    });

    this.firstObsSubs = customIntervalObs.pipe(filter((data: any) => {
      return data > 0;
    }), map((data: any) => {
      return 'Round: ' + (data  + 1);
    })).subscribe(data => {
      console.log('Udemy complete: ', data);
    }, error => {
      console.log(error);
      alert(error.message);
    }
    );
  }

  ngOnDestroy(): void {
    this.firstObsSubs.unsubscribe();
  }

  getData() {
    // This is normal way without forkJoin, data loaded as they come
    // this.testService.getWidgetOneData().subscribe((data) => {
    //   this.schoolsCount = data;
    //   this.schoolsLoading = false;
    // });
    // this.testService.getWidgetTwoData().subscribe((data) => {
    //   this.hospitalsCount = data;
    //   this.hospitalsLoading = false;
    // });
    // this.testService.getWidgetThreeData().subscribe((data) => {
    //   this.banksCount = data;
    //   this.banksLoading = false;
    // });

    // get data with forkJoin, all loaded at the same time
    this.testService.getAllData().subscribe(res => {
      this.schoolsCount = res[0];
      this.hospitalsCount = res[1];
      this.banksCount = res[2];
      this.schoolsLoading = false;
      this.hospitalsLoading = false;
      this.banksLoading = false;
    });
  }

  // mergeMap vs SwitchMap
  filter(searchText: string) {
    let obsOne = new Observable<string[]>((observer) => {
      setTimeout(() => {
        observer.next(['apple', 'pineapple']);
      }, 2000);
    });
    let obsTwo = new Observable<string[]>((observer) => {
      setTimeout(() => {
        observer.next(['mango', 'orange']);
      }, 2000);
    });

    return searchText === 'app' ? obsOne : obsTwo;
  }

  // async pipe instead of normal subscription
  getCountries() {
    this.section = 'country';
    // this.testService.getCountries().subscribe((res: string[]) => {
    //   this.countries = res;
    // });
    this.countriesObs$ = this.testService.getCountries();
  }

  getStatus() {
    this.section = 'status';
    this.status = false;
    // this.testService.getStatus().then((res: boolean) => {
    //   this.status = res;
    // });
    this.statusPromise$ = this.testService.getStatus();
  }

  // Udemy on Observables part 2
  createSubscriber(tag: any) {
    return {
      next(item: any) { console.log(`${tag}.next ${item}`); },
      error(error: any) { console.log(`${tag}.error ${error.stack || error}`); },
      complete() { console.log(`${tag}.complete`); },
    }
  }

  createInterval$(time: number) {
    return new Observable(observer => {
      let index = 0;
      let interval = setInterval(() => {
        console.log(`Generating ${index}`);
        observer.next(index++);
      }, time);

      return () => {
        clearInterval(interval);
      };
    });
  }

}
