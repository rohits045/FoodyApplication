import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router } from '@angular/router';
import { Restaurant } from '../model/Restaurant';
import { AddToCartService } from '../services/add-to-cart.service';
import { FavCousineService } from '../services/add-to-fav-services/fav-cousine.service';
import { FavRestaurantService } from '../services/add-to-fav-services/fav-restaurant.service';
import { AuthServiceService } from '../services/auth-service.service';
import { RestaurantLoginService } from '../services/restaurant-login.service';
import { AddRestaurantService } from '../services/restaurant-services/add-restaurant.service';

@Component({
  selector: 'app-all-restaurant-view',
  templateUrl: './all-restaurant-view.component.html',
  styleUrls: ['./all-restaurant-view.component.css']
})
export class AllRestaurantViewComponent implements OnInit{

  id:any

  ngOnInit(): void {
    console.log(this.activte_Route.snapshot.params['id'])
    this.id = this.activte_Route.snapshot.params['id'];
    this.getAll_restaurants();
  }
constructor(private get_RestaturantsService:AddRestaurantService ,private favCou:FavCousineService
  , private activte_Route :ActivatedRoute ,private route:Router
  , private fav:FavRestaurantService, private snackBar : MatSnackBar , private loginSerices:AuthServiceService){}

All_restauerstsData:any
rest_name_data:any
 Allresatuarant_details= localStorage.getItem("rest_data")

getAll_restaurants(){
     this.get_RestaturantsService.get_specific_Restaurnt(this.id).subscribe(
      (res_id)=>{
           this.All_restauerstsData=res_id             
           console.log(res_id)                   
      })
}

goToLoginPage(){
  alert("Please Login !!")
  this.route.navigate(['login'])
}
addFavCuisineData(items:any){
  if(this.loginSerices.isLoggedIn == true){
  this.favCou.addToFavCuisine(items).subscribe(result=>{
    console.log(result)
  })
}else{
  this.snackBar.open('Please Login Your Account!!', 'Close', {duration:2000})
}
}

addFav(item:any){
  if(this.loginSerices.isLoggedIn === true){ 
    
      this.fav.addToFaves(item);
   
     

      this.snackBar.open('Added To Cart !!!!', 'Done', {duration:2000})
 
  }else{
    this.snackBar.open('Please Login Your Account!!', 'Close', {duration:2000})
  }
  }

}
