import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-parent-one-child-one',
  templateUrl: './parent-one-child-one.component.html',
  styleUrls: ['./parent-one-child-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentOneChildOneComponent implements DoCheck {
  @Input() myStringArray: any[] = [];

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngDoCheck() {
    this.cdr.detectChanges();
    console.log('Parent One Child One change detection');
  }

  onClick() {
    this.myStringArray.push('Random Element');
  }

}
