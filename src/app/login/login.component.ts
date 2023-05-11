import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Observable, window } from 'rxjs';
import { __values } from 'tslib';
import { Admin } from '../model/Admin';
import { LoginService } from '../services/login.service';
import { AdminLoginService } from '../services/restaurant-services/admin-login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
constructor(private adminLoginService:AdminLoginService ,private router : Router,private ng_popUp:NgToastService
  , private loginService:LoginService ,private snackBar : MatSnackBar,private userService:UserService){
  // this.User_role=this.activateRoute.snapshot.params['role']
  // console.log( 'Role activate route data : ' + this.activateRoute.snapshot.params['my_role'])
}
  ngOnInit(): void {
 const _email_id=localStorage.getItem('_a_email');
 if(_email_id){
this.LoginData.value.emailId = _email_id;
 }
  }
  refresh(): void {
}
  LoginData=new FormGroup({
    emailId:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required]),
    role:new FormControl('this.data.role')

  })
  get emailid(){return this.LoginData.get('emailId'); }
  get Password(){ return this.LoginData.get('password');}

  admin:Admin[] = [];
 my_role=localStorage.getItem('role');
  emailId='';
  data:any;
  response_data:any

  Login(){
        this.adminLoginService.LoginCheck(this.LoginData.value).subscribe(
          loginResult=>{
            this.response_data = loginResult;
            console.log(loginResult)
            this.loginService.emailId = this.LoginData.value.emailId;
            const _email_id=this.LoginData.value.emailId
            localStorage.setItem('_a_email',_email_id!);
            this.loginService.getUserDetails().subscribe(
              res=>{
                this.data  = res;
                console.log(res)
                this.loginService.role = this.data.role;
                this.loginService.emailId = this.data.emailId;
                if(this.data.role === "Owner"){
                  this.ng_popUp.success({detail:'Login Successfully !!',summary:"Welcome As a Restaurant-Owner!!",duration:5000});
                  this.snackBar.open(" Login Successfully ,As a Restaurant-Owner!!", "Welcome", {duration:2000}); 
                  this.router.navigate(['/view-restaurant'])
                  
                  this.userService.loginStatusSubject.next(true);                                                                     
                }else if (this.data.role === "ADMIN"){
                  this.ng_popUp.success({detail:'Login Successfully !!',summary:"Welcome Admin !!",duration:5000});

                  this.snackBar.open("Admin - Login Successfully !!", "Welcome", {duration:2000}); 
                  this.router.navigate(['/foody-admin']) 
                  this.userService.loginStatusSubject.next(true);
                }
             
                else{

                  this.snackBar.open("User - Login Successfully !!", "Welcome", {duration:2000}); 
                  this.router.navigate(['/user-dashboard']); 
                  this.userService.loginStatusSubject.next(true);

                }
              }
              
            )
            
            localStorage.setItem('jwtToken',this.response_data.Token);
           
            // alert("Login Successfully !!")
            
          },
          (error=>{this.snackBar.open("Invalid Email/Password", "Dismiss", {duration:2000});
          this.router.navigate(["/login"])
        console.log(error)})
        )
        
  }

  goToSignUp(){
    this.router.navigate(['/sign-up'])
  }
}
