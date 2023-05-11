import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavRestaurantService implements OnInit {

  constructor(private httpClient:HttpClient) { }
  ngOnInit(): void {
   this.getFavItems()
  }

  public favItemList:any=[];
  public itemList =  new BehaviorSubject<any>([]);
  emailId:any;
  restaurant_url="http://localhost:9007/api/userService/addRestaurant/"

  email_id = localStorage.getItem('_a_email');


  getFavItems(){
    return this.itemList.asObservable();
  }
  
  setFavItems(items:any){
    this.favItemList.push(...items);
    this.itemList.next(items);
    
  }
isAlreadyExist:boolean =false;
  addToFaves(items:any){
   
         this.favItemList.push(items);                 
         this.itemList.next(this.favItemList)
         
         this.getTotalPrice();
        //  this.isAlreadyExist = true; 
        
         console.warn(this.favItemList)
  }


  getTotalPrice():number{
let grandTotal=0;
this.favItemList.map((a:any)=>{
  grandTotal +=a.total;
})
return grandTotal;  
  }
  removeCardItems(items:any){
    this.favItemList.splice(+items,1)
    // this.setFavItems(this.favItemList);
    
     this.itemList.next(this.favItemList);
    }

removeAllItemsFromCART(){
  this.favItemList=[]
  this.itemList.next(this.favItemList)
}


url_fav:any="http://localhost:9007/api/userService/addFav/"


addToFavRest(restaurant:any){
  const email_id = localStorage.getItem('_a_email');
  const headersOptions = {
        headers :new HttpHeaders().append('application-json','multipart/form-data')
      }
      let pramas = new FormData;
      pramas.append("restaurantId",restaurant.restaurantId);
      pramas.append("restaurantName",restaurant.restaurantName);
      pramas.append("restaurantLocation",restaurant.restaurantLocation);
      pramas.append("restaurant_rating",restaurant.restaurant_rating);
      return this.httpClient.post(this.url_fav+email_id,pramas,headersOptions)
}








  // addToFaves(item:any,email:any){
  //   const headersOptions = {
  //     headers :new HttpHeaders().append('application-json','multipart/form-data')
  //   }
  //   return this.httpClient.post(this.restaurant_url+ this.email_id,item,headersOptions);
    
  // }

  // public FavItemsTemp: any = [];

  // setFavItems(items:any){
  //   this.FavItemsTemp=items;
  // }

  // getFavItems(){
  //   return this.FavItemsTemp;
  // }





addFav_restaurant(form:FormData){
  const headersOptions = {
    headers :new HttpHeaders().append('application-json','multipart/form-data')
  }
  return this.httpClient.post(this.restaurant_url+this.email_id,form,headersOptions)

}
}
