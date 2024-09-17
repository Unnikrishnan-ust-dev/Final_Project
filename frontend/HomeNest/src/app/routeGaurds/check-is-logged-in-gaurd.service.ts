import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckIsLoggedInGaurdService {

  constructor(private router: Router,private authenticationService: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    let isAuthenticated = this.checkAuth();
    if(isAuthenticated){
      return true;
    }else{
      this.router.navigate(['/']);
      return false;
    }
  }

  checkAuth() : boolean {
    let isNotAuthenticated = false;
    this.authenticationService.user$.subscribe(user => {
      if (user == null) {
        isNotAuthenticated =  true;
      } else {
        isNotAuthenticated =  false;
      }
    })

    return isNotAuthenticated;
  }
}
