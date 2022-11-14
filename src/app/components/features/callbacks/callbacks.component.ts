import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callbacks',
  templateUrl: './callbacks.component.html',
  styleUrls: ['./callbacks.component.scss']
})
export class CallbacksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => 
      this.firstAction(() => 
        this.secondAction('Im second'), 'Im first')
      , 3000);
  }

  firstAction(callback: any, message: string) {
    console.log(message);
    setTimeout(callback, 2000);
  }

  secondAction(message: string) {
    console.log(message);
  }

}
