import { Component, OnInit } from '@angular/core';
import { AddToCardService } from '../services/add-to-card.service';
import { Restaurant} from '../model/Restaurant';
import { FavRestaurantService } from '../services/add-to-fav-services/fav-restaurant.service';
import { AddRestaurantService } from '../services/restaurant-services/add-restaurant.service';
import { FavCousineService } from '../services/add-to-fav-services/fav-cousine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-add-to-card',
  templateUrl: './add-to-card.component.html',
  styleUrls: ['./add-to-card.component.css']
})
export class AddToCardComponent implements OnInit{


constructor(private fav :FavRestaurantService,private addRestaurant_Service:AddRestaurantService ,
  private favCu:FavCousineService,private route:Router, private activte_Route :ActivatedRoute,private order:OrderService){}
id:any

TotalAmount!:number;
qty:number=0;
total!:number;
public restaurantsList:any=[];
// cuisionPrice:any=this.restaurantsList.price;
  ngOnInit(): void {
    console.log(this.activte_Route.snapshot.params['id'])
    this.id = this.activte_Route.snapshot.params['id'];
  
     this.fav.getFavItems().subscribe(res=>{
        this.restaurantsList = res
        
          console.log(res);
          this.restaurantsList.forEach( (a:any) => {
            Object.assign(a,{qty:1,total:a.price});
          });
     }); 
     // this.totalAmountGet();
     this.fav.getFavItems().subscribe(res=>{
      this.restaurantsList = res;
      this.TotalAmount = this.fav.getTotalPrice();})
  }

i:number=1
plus(restaurantsList:any)
 {
  restaurantsList.qty=1;
  if(this.i!=10)
  {
    this.i++;
    restaurantsList.qty=this.i;
    console.log(restaurantsList.qty);
    restaurantsList.total=restaurantsList.price*this.i;
    console.log(restaurantsList.total);
    this.TotalAmount = restaurantsList.total;
    this.TotalAmount = this.fav.getTotalPrice();
  }
 }
removeitem(restaurantsList:any){
  if(this.i !=1)
  {
    this.i--;
    restaurantsList.qty=this.i;
    console.log(restaurantsList.qty);
    restaurantsList.total=restaurantsList.price*this.i;
    console.log(restaurantsList.total);
    this.TotalAmount = restaurantsList.total;
    this.TotalAmount = this.fav.getTotalPrice();
  }
  console.log(restaurantsList)
}





// totalAmountGet(){
//   this.fav.getFavItems().subscribe(res=>{
//     this.restaurantsList = res;
//     this.TotalAmount = this.fav.getTotalPrice();
//   })
// }


  removeItemFromCart(item:any){
    this.fav.removeCardItems(item)
  }
  emptyCart(){
    this.fav.removeAllItemsFromCART();
  }
  public email: any = localStorage.getItem('_a_email');

  addToFav_Rest(item:any){
this.addRestaurant_Service.addRestaurant_Data(item).subscribe(res=>{
    
  console.log(res);
  console.log(item)
})
  }
fav_rest(items:any){
  this.fav.addToFavRest(items).subscribe(res=>{
    console.log(res)
  })
}
// ------------------------------------------------------------
goToLoginPage(){
  alert("Please Login !!")
  this.route.navigate(['login'])
}


addFavCuisineData(items:any){
  this.favCu.addToFavCuisine(items).subscribe(result=>{
    console.log(result)
  })
}


// ORDER METHOD-----
orderData:any=[]
goToCheckOut(fav:any){

  this.order.OrderCuisine(fav).subscribe(res=>
    {

    this.orderData=res;
      console.log(this.orderData)
      alert("Order Added Successfully !! Please Enter Your Shipping Address!!")
    })
    this.route.navigate(['/address'])
    this.fav.removeAllItemsFromCART();
 }

}
