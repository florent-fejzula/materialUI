import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfumesService } from 'src/app/services/perfumes.service';

@Component({
  selector: 'app-guards',
  templateUrl: './guards.component.html',
  styleUrls: ['./guards.component.scss']
})
export class GuardsComponent implements OnInit {
  firstName!: string;
  lastName!: string;
  email!: string;

  perfumes: any;

  constructor(
    private perfumeService: PerfumesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.perfumes = this.route.snapshot.data['perfumes'];
  }

  canExit() {
    if(this.firstName || this.lastName || this.email) {
      return confirm('You have unsaved changes, are you sure you want to discard these changes?');
    }
    else {
      return true;
    }
  }

}
