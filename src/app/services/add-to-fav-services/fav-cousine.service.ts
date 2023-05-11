import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavCousineService {

  constructor(private httpClient:HttpClient) { }
 
  url_favCuisine:any="http://localhost:9007/api/userService/addFavCuisineData/"
  url_address:any="http://localhost:9007/api/userService/addAddress/"

addToFavCuisine(cuisine:any){
  const email_id = localStorage.getItem('_a_email');
  const headersOptions = {
        headers :new HttpHeaders().append('application-json','multipart/form-data')
      }
      let pramas = new FormData;
      pramas.append("cuisineId",cuisine.cuisineId);
      pramas.append("cuisineName",cuisine.cuisineName);
      pramas.append("cuisineDescription",cuisine.cuisineDescription);
      pramas.append("price",cuisine.price);
      return this.httpClient.post(this.url_favCuisine+email_id,pramas,headersOptions)
}

 addAddress(address:FormData){
 const email_id = localStorage.getItem('_a_email');

   return this.httpClient.post(this.url_address+email_id,address)
 }
}
