import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http/http.service';

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
export class RxjsComponent implements OnInit {
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

  constructor(
    private http: HttpClient,
    private httpService: HttpService
  ) {
    this.employees = this.httpService.getEmployees().subscribe((data) => {
      this.employeeList = data;
    });
  }

  ngOnInit(): void {
    this.http.get<Fruit>('./assets/exampleJson.json').subscribe((data: Fruit) => {
      console.log(data.color);
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
  }

}
