import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface AngularStuff {
  name: string,
  description: string
}

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss']
})
export class SmartComponent {
  list!: Observable<AngularStuff[]>;

  constructor(http: HttpClient) {
    const path = 'https://api.github.com/search/repositories?q=angular';
    this.list = http.get<{items: any[]}>(path)
      .pipe(
        map(data => data.items),
      );
  }

}
