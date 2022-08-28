import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from 'src/app/components/rxjs/rxjs.component';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url);
  }
}
