import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGaurdService implements CanActivate{

  constructor(private router: Router,private authenticationService: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    let isAuthenticated = this.checkAuth();
    if(isAuthenticated){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }

  checkAuth() : boolean {
    let isAuthenticated = false;
    this.authenticationService.user$.subscribe(user => {
      if (user?.role == "USER") {
        isAuthenticated =  true;
      } else {
        isAuthenticated =  false;
      }
    })

    return isAuthenticated;
  }
}
