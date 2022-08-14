import { Component, OnInit } from '@angular/core';
import { PerfumesService } from './services/perfumes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'materialUI';
  notification = 2  ;
  loaded = true;
  checked = false;
  perfumes: any;
  theDate: any;

  constructor(private perfumeService: PerfumesService) {
    this.perfumes = this.perfumeService.perfumes;
  }

  ngOnInit() {
    setTimeout(() => {
      this.loaded = true;
    }, 1000);
  }

  dateChanged($event: { target: { value: any; }; }) {
    let value = $event.target.value.toString().split(' ');
    this.theDate = `${value[2]} ${value[1]} ${value[3]}`;
  }

  openDialog() {
    alert('detail');
  }
}
