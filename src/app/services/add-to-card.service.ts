import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToCardService {
  // http://localhost:9007/api/userService/addRestaurant/User@gmail.com
  constructor(private httpclient:HttpClient) { }

  card_url:any=" http://localhost:9007/api/userService/addRestaurant"
  myUser:any=localStorage.getItem('_a_email')

  addToCard()
  {
    const httpOptions = {
      headers: new HttpHeaders().append('application-json','multipart/form-data')
       }
       return this.httpclient.post(this.card_url+this.myUser,httpOptions);
  }
}
