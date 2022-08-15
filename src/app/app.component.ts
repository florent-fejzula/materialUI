import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { DialogExampleComponent } from './components/dialog-example/dialog-example.component';
import { PerfumesService } from './services/perfumes.service';

export interface Perfume {
  brand: string,
  name: string,
  imgSrc: string[],
  description: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  notification = 2;
  checked!: boolean;
  loaded = true;
  perfumes: any;
  pageSlice: any;

  constructor(
    private perfumeService: PerfumesService,
    private dialog: MatDialog
  ) {
    this.perfumes = this.perfumeService.perfumes;
    this.pageSlice = this.perfumes.slice(0, 4);
  }

  ngOnInit() {
    setTimeout(() => {
      this.loaded = true;
    }, 1000);
  }

  openDialog(perfume: Perfume): void {
    this.dialog.open(DialogExampleComponent, {
      width: '500px',
      data: perfume
    });
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.perfumes.length) {
      endIndex = this.perfumes.length;
    }
    this.pageSlice = this.perfumes.slice(startIndex, endIndex);
  }

  getSlider(slider: any) {
    this.checked = slider;
  }
}
