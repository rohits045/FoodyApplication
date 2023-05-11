import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { RouteServiceService } from './route-service.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService {

  constructor(private auth:AuthServiceService , private route:RouteServiceService
    //  ,private loginMethod:RestaurantLoginService
     ) { }

  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  
     if(this.auth.isLoggedIn){
   return true
  }

   else{
    this.route.gotologin()
    return false;
   }

}
  
}
