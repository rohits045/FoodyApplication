import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  isLoggedIn:boolean = false

  login(){
    this.isLoggedIn=true;
  }

  logOut(){
    this.isLoggedIn=false;
  }
}
