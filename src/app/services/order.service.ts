import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient : HttpClient) { }
  public order_Url:String="http://localhost:9007/api/userService/order/"
  public get_order_Url:String="http://localhost:9007/api/userService/orderList/"

  
get_app_details_url=''
  OrderCuisine(item:any)
  {
   const email_id:any=localStorage.getItem("_a_email");
    const headersOptions = {
      headers :new HttpHeaders().append('application-json','multipart/form-data')
    }
    let pramas = new FormData;
    pramas.append("cuisineId", (item?.cuisineId));
    pramas.append("cuisineName",item?.cuisineName);
    pramas.append("cuisineDescription",item?.cuisineDescription);
    pramas.append("qty",item.qty);
    pramas.append("price",item?.price)
    pramas.append("total",item?.total)
    return this.httpClient.post(this.order_Url+email_id,pramas,headersOptions)
  }

 getOrderDetails(){
  const email_id:any=localStorage.getItem("_a_email");
  return this.httpClient.get(this.get_order_Url+email_id)
 }

}
