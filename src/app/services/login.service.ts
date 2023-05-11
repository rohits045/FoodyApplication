import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{

  constructor(private httpClient:HttpClient  ) { }
  ngOnInit(): void {
   
  }

  
base_Url="http://localhost:5075/api/authService/"
emailId:any
role:any

getUserDetails(){
  
  return this.httpClient.get(this.base_Url+this.emailId)
}



}
