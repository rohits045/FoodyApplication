import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddRecipesService {

  constructor(private httpclient:HttpClient) { }
email_id:any = localStorage.getItem("_a_email")
menu_url:any="http://localhost:65152/admin/page";
// menu_url:any="http://localhost:62005/admin/page";
cousine_url="http://localhost:9007/api/userService/addFavCuisine/"
address_list="http://localhost:9007/api/userService/getAddress/"

addMenuItemInRestaurantApi(formData:FormData){
  const email_id:any = localStorage.getItem("_a_email");
  const httpOptions = {
    headers: new HttpHeaders().append('application-json','multipart/form-data')
     }
     return this.httpclient.post(this.cousine_url+email_id,formData,httpOptions)
}

getAddressList(){
  const email_id:any = localStorage.getItem("_a_email");
  return this.httpclient.get(this.address_list+email_id)
}
}
