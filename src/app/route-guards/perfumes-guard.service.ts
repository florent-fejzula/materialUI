import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PerfumesGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authService.isAuthenticated()) {
      return true;
    } 
    else {
      this.router.navigate(['/rxjs']);
      return false;
    };
  }

}
