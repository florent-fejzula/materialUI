import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AngularStuff } from '../smart/smart.component';
@Component({
  selector: 'app-dumb',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DumbComponent implements OnInit {
  @Input() list!: AngularStuff[] | null;

  constructor() { }

  ngOnInit() {
  }

}
