import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private httpClient:HttpClient ,private activateRoute:ActivatedRoute,private checkLogin:AuthServiceService) {
    this.getUserDetails();
    this.role=this.activateRoute.snapshot.params['role']
    console.log( 'Role activate route data : ' + this.activateRoute.snapshot.params['role'])
   }
   isUserLoggedIn=false

  emailId='';
  role:any;
  add_url:any="http://localhost:9007/api/userService/user/"

  // add_url:any= "http://localhost:65001/api/userService/user/"
 login_url:any="http://localhost:5075/api/authService/loginUser"

allUser_Details:any="http://localhost:5075/api/authService/getAll";
delete_url:any="http://localhost:5075/api/authService/delete/";
  LoginCheck(obj:any):Observable<any>{
    if(this.checkLogin.isLoggedIn==true){
      // window.location.reload();

    }
    this.checkLogin.login();
   return this.httpClient.post(this.login_url,obj);
   

  }


  getUserDetails()
  {
    return this.httpClient.get(this.add_url + this.emailId);
  }

  getAllUserDetails(){
    return this.httpClient.get(this.allUser_Details)
  }
 delete(email_id:any){
   return this.httpClient.delete(this.delete_url+email_id);
 }

}


