import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { AuthServiceService } from './auth-service.service';
import { RouteServiceService } from './route-service.service';

@Injectable({
  providedIn: 'root'
})
export class CanDeActivateGuard implements CanActivate, CanDeactivate<LoginComponent> {

  constructor(private auth:AuthServiceService , private route:RouteServiceService
    //  ,private loginMethod:RestaurantLoginService
     ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: LoginComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.auth.isLoggedIn){
        
        return false
       }
     
        else{
         
         return true;
        }
      // return true;
  }
  
}
