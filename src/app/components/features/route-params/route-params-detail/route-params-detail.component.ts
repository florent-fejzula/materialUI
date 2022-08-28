import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-route-params-detail',
  templateUrl: './route-params-detail.component.html',
  styleUrls: ['./route-params-detail.component.scss']
})
export class RouteParamsDetailComponent implements OnInit {
  perfumeId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = param.get('id');
      this.perfumeId = Number(id);
    })
  }

  previous() {
    if (this.perfumeId === 1) {
      return;
    }
    let previoudId = this.perfumeId - 1;
    this.router.navigate(['../', previoudId], {relativeTo: this.route});
  }

  next() {
    if (this.perfumeId === 3) {
      return;
    }
    let nextId = this.perfumeId + 1;
    this.router.navigate(['../', nextId], {relativeTo: this.route});
  }

  goToPerfumes() {
    let selectedId = this.perfumeId;
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

}
