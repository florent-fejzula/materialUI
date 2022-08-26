import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { PerfumesService } from 'src/app/services/perfumes.service';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

export interface Perfume {
  brand: string,
  name: string,
  imgSrc: string[],
  description: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  notification = 2;
  checked!: boolean;
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
