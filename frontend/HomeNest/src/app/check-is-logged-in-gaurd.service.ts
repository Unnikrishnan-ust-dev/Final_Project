import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckIsLoggedInGaurdService {

  constructor(private router: Router,private authenticationService: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    let user = this.authenticationService.user;
    if(user == null){
      return true;
    }else{
      this.router.navigate(['/']);
      return false;
    }
  }
}
