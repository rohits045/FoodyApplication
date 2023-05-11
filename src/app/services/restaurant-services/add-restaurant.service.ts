import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Restaurant } from 'src/app/model/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class AddRestaurantService {
  restaurantId: any;
  All_restauerstsData:Array<Restaurant> = []
  cartItems:any[]=[];
  numOfItems = new BehaviorSubject<any>([]);
  constructor(private httpClient:HttpClient) { 
    const ls = this.getCartData();
    if(ls) this.numOfItems.next(ls)

    // this.get_specific_Restaurnt(this.restaurantId);
    this.getAllRestaurantsWithCouisin();
  }

  restaurant_url="http://localhost:9007/api/userService/addRestaurant/";
  Fav_restaurant_url="http://localhost:9007/api/userService/addFavRestaurant/"
  // restaurant_url="http://localhost:65152/admin/page";
  // restaurant_url="http://localhost:62005/admin/page";
restaurant_Get_Url="http://localhost:65100/api/restaurant"
restaurant_cuisin_Url="http://localhost:65100/api/get-cuisines"
only_restaurant__Url="http://localhost:65100/api/restaurants"
addRestaurant_url="http://localhost:65100/api/addRestaurant"
_email_id:any=localStorage.getItem('_a_email')

  get_citys_restaurants  = "http://localhost:65100/api/restaurant"
// ---------------------------------------------------------------------------------------------
addRestaurantAccordingToAdmin_email(form :FormData){
  let _email_id:any=localStorage.getItem('_a_email');
  const headerOption={
    headers:new HttpHeaders().append('application-json','multipart/form-data')
      
  }
 
  return this.httpClient.post(this.restaurant_url+_email_id,form,headerOption)
}
addRestaurantToRestaurantService(form :FormData){
  const headerOption={
    headers:new HttpHeaders().append('application-json','multipart/form-data')
      
  }
 
  return this.httpClient.post(this.addRestaurant_url,form,headerOption)
}

addToCart(item:Restaurant){
  const ls = this.getCartData();
  let exist:any;
  if(ls)
  exist = ls.find((i:any)=>{
    return i.restaurantId===item.restaurantId
    
  });
  if(exist){
    exist.qty++;
    this.setCartData(ls);
  }
  else{
    if(ls){
      const newData = [...ls,item];
      this.setCartData(newData);
      return
    }
      this.cartItems.push(item);
      this.setCartData(this.cartItems);
      
    
  }
}


setCartData(data:any){
  localStorage.setItem('fev_rest',JSON.stringify(data));
  this.numOfItems.next(this.getCartData());
}
getCartData(){
  return JSON.parse(localStorage.getItem('fev_rest')!);
}


addRestaurant_Data(items:any){
  const headerOption={
    headers:new HttpHeaders().append('application-json','multipart/form-data')
      
  }
 
  return this.httpClient.post(this.Fav_restaurant_url+this._email_id,items,headerOption)
}




  // ---------------------------------------------------------------------------------









// ---------------------------------------------------------------------------------------------------------

getAllRestaurantsWithCouisin():Observable<any>{
  return this.httpClient.get(this.restaurant_Get_Url)
}
get_specific_Restaurnt(restaurantId:any){
  return this.httpClient.get(this.restaurant_cuisin_Url+"/"+restaurantId);
}

searchRestaurantsByCityName(city:any){
  return this.httpClient.get(this.get_citys_restaurants+"/"+city)
}

getOnlyOneRestaurants(restaurantId:any){
  return this.httpClient.get(this.only_restaurant__Url+"/"+restaurantId);

}


}

