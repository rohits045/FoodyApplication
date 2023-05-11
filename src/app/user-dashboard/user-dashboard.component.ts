import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FileHandle } from '../model/FileHandle';
import { Restaurant } from '../model/Restaurant';
import { AddToCartService } from '../services/add-to-cart.service';
import { FavRestaurantService } from '../services/add-to-fav-services/fav-restaurant.service';
import { AddRestaurantService } from '../services/restaurant-services/add-restaurant.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{



  constructor( private addRestaurant_Service:AddRestaurantService , private fav:FavRestaurantService,
    private router:Router,private sanitizer: DomSanitizer, private snackBar : MatSnackBar,private cart_service:AddToCartService){};

  


 email_id=localStorage.getItem("_a_email")
All_restauerstsData:Array<Restaurant> = []
// retrievedImage: any;
// profileImage: any
itemInCart!:number;
data: any;
public productList:any
// ---------------------------------------------------------------
searchKey:string='';
public searchTerm : string ='';
public restaurantsList:any=[];
public filtertypeOfRestaurant:any

ngOnInit(): void {
 
   this.fav.getFavItems().subscribe(res=>{
      this.productList = res
   })
  this.getAll_restaurants();

  this.fav.getFavItems().subscribe(res=>{
    this.restaurantsList = res
    
    console.log(res);
    this.restaurantsList.forEach( (a:any) => {
      // if(a.typeOfRestaurant==='Chicken-Non-Veg' || a.typeOfRestaurant==='Veg' ){
      //   a.typeOfRestaurant='McDonald'
      // }
      Object.assign(a,{qty:1,total:a.price})
    });
 }) 

  // ------------------------------------------------------
  this.cart_service.search.subscribe(val=>{
    this.searchKey = val;
  })
}
search(event:any){
this.searchTerm = (event.target as HTMLInputElement).value;
console.log(this.searchTerm)
this.cart_service.search.next(this.searchTerm);
}
// ----------------------------------------------------------------------------------


getAll_restaurants(){
  return this.addRestaurant_Service.getAllRestaurantsWithCouisin().subscribe(
     res=>{
       this.data = res;
       this.filtertypeOfRestaurant =res
       console.log(res)
       this.data.forEach( (a:any) => {
        if(a.typeOfRestaurant==='Chicken-Non-Veg' || a.typeOfRestaurant==='Veg' ){
          a.typeOfRestaurant='McDonald'
        }
      //  this.retrievedImage = 'data:image/jpeg;base64,' + this.data.picByte;
       
     }
   )
 })
}
 public get_cart_Storagedata:any=localStorage.getItem('fev_rest')


 addFav(item:any){
 this.fav.addToFaves(item);
 this.snackBar.open('Added To Favourite!!!!', 'Close', {duration:2000}) }



favRest:any


addFavRest(item:any){
  this.fav.addToFavRest(item).subscribe(res=>{
       this.favRest = res;
       console.log(res);
       console.log(this.favRest);
       this.snackBar.open('Added To Favourite!!!!', 'Close', {duration:2000})
  })
}
filter(typeOfRestaurant:string){
  this.filtertypeOfRestaurant = this.data
    .filter((a:any)=>{
    if(a.typeOfRestaurant == typeOfRestaurant || typeOfRestaurant==''){
      return a;
    }
  })
}

//  addFav(item:any){
//   this.fav.addToFaves(this.get_cart_Storagedata,this.email_id).subscribe(res=>{
//     this.get_cart_Storagedata =res
//     console.warn(res);
//     this.snackBar.open('Added To Favourite!!!!', 'Close', {duration:2000});
//   })
//  }

 
 addToCart_rest(restaurant: any) {
  this.addRestaurant_Service.addToCart(restaurant);
  this.snackBar.open('Added To Cart!!!!', 'Close', {duration:2000});

}

}
