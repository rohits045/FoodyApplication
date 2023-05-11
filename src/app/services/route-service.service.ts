import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteServiceService {

  constructor(private router:Router) {} 

  gotologin(){
    this.router.navigate(['login'])

  }
}
