import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{


  // emailId:any;
  constructor(private httpclient:HttpClient ,private loginService :LoginService,private activateRoute:ActivatedRoute
     
    ) { 

    this.getAllUserDetails();
    // this.getEmailId();
  }
  getemailId:any
  ngOnInit(): void {
 this.activateRoute.snapshot.params['emailId']
  console.log(this.activateRoute.snapshot.params['emailId'])   
 
    this.getEmailId();
    this.userProfile().subscribe(result=>{
      this.userData = result;
      
      console.log(result);
      console.log(this.userData);
    })
       localStorage.getItem('_a_email')
    
  }
  public loginStatusSubject = new Subject<boolean>();

  user_url="http://localhost:9007/api/userService/users/"
  user_url2="http://localhost:9007/api/userService/user/"
  user_fav_cuisine="http://localhost:9007/api/userService/getCuisine/"
  user_fav_Rest="http://localhost:9007/api/userService/getFavRest/"

  email_id=localStorage.getItem('_a_email')


  jwtToken = localStorage.getItem('jwtToken');
userData:any
  userProfile(){
    const email_id=localStorage.getItem('_a_email');
    
    return this.httpclient.get(this.user_url+email_id)
  }
getEmailId(){
  this.loginService.getUserDetails().subscribe(res=>{
   this.userData = res
   
  //  const email_id=localStorage.getItem('_a_email');
    
   console.log(res)
  })
}
  getAllUserDetails():Observable<any>{
    return  this.httpclient.get(this.user_url2 + this.email_id)
  }
  getFavCusine(){
    const email_id=localStorage.getItem('_a_email');
    return this.httpclient.get(this.user_fav_cuisine+email_id)
  }
  getFavRest(){
    const email_id=localStorage.getItem('_a_email');
    return this.httpclient.get(this.user_fav_Rest+email_id)
  }
}
