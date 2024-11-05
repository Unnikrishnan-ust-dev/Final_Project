import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const providerGaurdGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);

  if(authService==null){
    alert("Error in authentication!!");
    return false;
  }
  let isProvider = checkRole(authService);
  if(isProvider){
    router.navigateByUrl("/order-page-provider");
    return false;
  }else{
    return true;
  }
};

function checkRole(authService: AuthService) : boolean {
  let isProvider = false;
  authService.user$.subscribe(user => {
    if (user?.role == "SERVICE_PROVIDER") {
      isProvider =  true;
    } else {
      isProvider =  false;
    }
  })

  return isProvider;
}