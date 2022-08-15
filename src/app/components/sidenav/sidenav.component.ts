import { Component, EventEmitter, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { PerfumesService } from 'src/app/services/perfumes.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  checked!: boolean;
  sliderChecked: any;
  sliderValue: any;
  theDate: any;
  panelOpenState = false;
  @Output() sliderEvent = new EventEmitter();

  constructor(private perfumeService: PerfumesService) {
    this.checked = this.perfumeService.checked;
  }

  dateChanged($event: { target: { value: any; }; }) {
    let value = $event.target.value.toString().split(' ');
    this.theDate = `${value[2]} ${value[1]} ${value[3]}`;
  }

  onSliderChange(event: MatSliderChange) {
    this.sliderValue = event.value;
  }

  sliderChange() {
    this.sliderEvent.emit(this.checked);
  }

}
