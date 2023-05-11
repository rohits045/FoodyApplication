import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../model/Restaurant';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-owner-restaurants-details',
  templateUrl: './owner-restaurants-details.component.html',
  styleUrls: ['./owner-restaurants-details.component.css']
})
export class OwnerRestaurantsDetailsComponent implements OnInit{
  constructor(private userService:UserService){
  }
  ngOnInit(): void {
this.getAllFavRest(); 
this. getFavCuisine();
}

  fav_restauerstsData:Array<Restaurant> = []

   fav_RestaurantData:any=[]
 getAllFavRest(){
  this.userService.getFavRest().subscribe(res=>{
    this.fav_RestaurantData = res;
    console.log(res)
  })
}
favCuisine:any
  getFavCuisine(){
    this.userService.getFavCusine().subscribe(res=>{
      this.favCuisine = res;
      console.log(res)
    })
  }
}
