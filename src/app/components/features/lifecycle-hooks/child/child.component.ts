import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnDestroy {
  timer = 0;
  intervalTest: any;
  
  ngOnInit(): void {
    this.intervalTest = setInterval(() => {
      this.timer++;
      console.log(this.timer);
    }, 1000);
  }
  
  ngOnDestroy(): void {
    console.log('Child Destoryed');
    // If you don't clear the interval, it will keep being active
    // even after navigating off the route
    clearInterval(this.intervalTest);
  }

}
