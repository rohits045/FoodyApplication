import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantAdminService {

  constructor(private httpclient:HttpClient) { }
  // add_url:any="http://localhost:65152/admin/page"
  // add_url:any="http://localhost:62005/admin/page"

  // add_url:any="http://localhost:65001/api/userService"
  add_url:any="http://localhost:9007/api/userService"
 user_url:any='http://localhost:9007/api/userService/userRegister'
  role: any;

  registerAdmin (formData:FormData):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders().append('application-json','multipart/form-data')
       }
    return  this.httpclient.post(this.add_url+"/ownerRegister",formData,httpOptions);
      }

register_User(formData:FormData):Observable<any>{
  const httpOption = {
    headers : new HttpHeaders().append('application-json','multipart/form-data')
  }
  return this.httpclient.post(this.user_url,formData,httpOption)
}




}

