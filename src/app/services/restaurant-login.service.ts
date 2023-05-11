import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Injectable({
  providedIn: 'root'
})
export class RestaurantLoginService {

  constructor(private httpclient:HttpClient) { }

// --------Login Admin in User class ---------------------
IsLoggedIn:boolean=false;
login_url:any='http://localhost:5075/api/Admin'
 adminLogin(formdata:FormData){
  this.IsLoggedIn = true
  const headerOption:any={
    header:new HttpHeaders().append('application-json','multipart/form-data')
  }
  return  this.httpclient.post(this.login_url+"/loginAdmin"+formdata,headerOption)
 }

//  ---------------------Register Admin in UserClass 
 adminRegister(formdata:FormData){
  const headerOption={
    headers:new HttpHeaders().append('application-json','multipart/form-data')
  }
  return this.httpclient.post(this.login_url+"/registerAdmin"+formdata,headerOption);
 }


}
