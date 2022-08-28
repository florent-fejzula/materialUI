import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  message!: string;
  name = 'Dodi';
  @Output() greetEvent = new EventEmitter();

  sendNameToParent() {
    this.greetEvent.emit(this.name);
  }
}
