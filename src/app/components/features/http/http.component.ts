import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
  users: any;
  url = 'https://api.github.com/users';
  loadedPosts: Post[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.fetchPosts();
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

  // http POST with subscribe
  onCreatePost(postData: { title: string; content: string }) {
    this.http.post('https://dodi-web-default-rtdb.europe-west1.firebasedatabase.app/posts.json', postData).subscribe(responseData => {
      console.log(responseData);
    });
  }

  getPosts() {
    console.log('fetching posts:');
    this.fetchPosts();
  }

  // http GET with subscribe
  fetchPosts() {
    this.http.get<{ [key: string]: Post} >('https://dodi-web-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
    .pipe(map(responseData => {
      const postsArray: Post[] = [];
      for (const key in responseData) {
        if(responseData.hasOwnProperty(key)) {
          postsArray.push({ ...responseData[key], id: key });
        }
      }
      return postsArray;
    }))
    .subscribe(posts => {
      // console.log(posts);
      this.loadedPosts = posts;
    });
  }

}
