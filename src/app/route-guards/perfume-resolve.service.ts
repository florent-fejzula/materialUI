import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PerfumesService } from '../services/perfumes.service';

@Injectable({
  providedIn: 'root'
})
export class PerfumeResolveService implements Resolve<any> {
  constructor(
    private perfumesService: PerfumesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.perfumesService.getAllPerfumes().then((data: any) => {
      return data;
    });
  }
}
