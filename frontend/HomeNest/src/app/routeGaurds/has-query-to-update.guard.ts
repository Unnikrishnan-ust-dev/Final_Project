import { CanActivateFn } from '@angular/router';

export const hasQueryToUpdateGuard: CanActivateFn = (route, state) => {
  if(route.queryParamMap.has('serviceId')){
    return true;
  }
  console.log(route);
  alert("Invalid service ID");
  return false;
};
