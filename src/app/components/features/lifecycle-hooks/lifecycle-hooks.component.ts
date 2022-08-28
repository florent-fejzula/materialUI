import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent {
  childActive = false;

  toggleChild() {
    this.childActive = !this.childActive;
  }

}
