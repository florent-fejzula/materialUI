import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
  users: any;
  url = 'https://api.github.com/users';

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get(this.url).subscribe((res: any) => {
      console.log('success');
      console.log(res);
      this.users = res;
    }, error => {
      console.log('error');
      console.log(error);
    }, () => {
      console.log('completed');
      
    });
  }

  goToGithub(url: string | URL | undefined) {
    window.open(url, '_blank');
  }

  // http Interceptor for wrong request
  getProduct() {
    this.http.get('http://something.com/api/product').subscribe((res) => {
      console.log(res);
    });
  }

}
