import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Fruit {
  color: string,
  fruit: string,
  size: string
}

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  array1 = [1, 2, 7, 8];
  array2 = ['Y', 'R', 'T'];

  myObservable1 = new Observable((observer) => {
    console.log('Observer starts');
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

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<Fruit>('./assets/exampleJson.json').subscribe((data: Fruit) => {
      console.log(data.color);
    });

    this.myObservable.subscribe((val: any) => {
      console.log(val);
    }, (error: { message: any; }) => {
      alert(error.message);
    }, () => {
      // alert('Observable has completed!');
      console.log('Observable completed!');
    });
  }

}
