import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callbacks',
  templateUrl: './callbacks.component.html',
  styleUrls: ['./callbacks.component.scss']
})
export class CallbacksComponent implements OnInit {
  output = '';

  posts = [
    { title: 'Post One', body: 'This is body one' },
    { title: 'Post Two', body: 'This is body two' }
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => 
      this.firstAction(() => 
        this.secondAction('Im second'), 'Im first')
      , 3000);

    // basic Promise example
    const myPromise  = new Promise((res, rej) => {
      let conn = true;

      if(conn) {
        res('Connection estabilished');
      }
      else {
        rej('Connection refused');
      }
    });

    myPromise.then((message) => {
      console.log(message);
    }).catch((message) => {
      console.log(message);
    });

    // this.getPosts();
    this.createPost({ title: 'Post Three', body: 'This is body three' }).then(this.getPosts);
  }

  firstAction(callback: any, message: string) {
    console.log(message);
    setTimeout(callback, 2000);
  }

  secondAction(message: string) {
    console.log(message);
  }

  getPosts() {
    setTimeout(() => {
      console.log('OUTPUT: ', this.output);
      this.output = '';
      console.log('OUTPUT 2: ', this.output);
      this.posts.forEach((post, index) => {
        this.output += post.title;
      });
    }, 1000);
  }

  createPost(post: { title: string; body: string; }) {
    console.log('POSTSSS: ', this.posts);
    
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        this.posts.push(post);

        const error = false;

        if(!error){
          resolve();
        }
        else {
          reject('Error! Smth ewrnrt ower');
        }
      }, 2000);
    });
  }

}
