import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-route-params',
  templateUrl: './route-params.component.html',
  styleUrls: ['./route-params.component.scss']
})
export class RouteParamsComponent implements OnInit, DoCheck {
  selectedId!: number;

  perfumes = [
    {id: 1, name: 'Phtaloblue'},
    {id: 2, name: 'Colonia Assoluta'},
    {id: 3, name: 'Roses on Ice'}
  ]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = param.get('id');
      this.selectedId = Number(id);
    })
  }

  ngDoCheck() {
    console.log('Checking for root changes');
  }

  onSelect(perfume: any) {
    console.log('onSelect clicked');
    
    this.router.navigate(['features/route-params/', perfume.id]);
  }

  isSelected(perfume: any) {
    console.log(perfume.id, this.selectedId);
    
    return perfume.id === this.selectedId;
  }

  onClick() {}

}
