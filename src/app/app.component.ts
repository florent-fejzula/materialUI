import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loaded = false;
  displayLoadingIndicator = false;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.loaded = true;
    }, 1000);

    this.router.events.subscribe((routerEvent: any) => {
      if(routerEvent instanceof NavigationStart) {
        this.displayLoadingIndicator = true;
      }
      if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
        this.displayLoadingIndicator = false;
      }
    });
  }
}
