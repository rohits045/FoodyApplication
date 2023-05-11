import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/model/Restaurant';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-fav-restaurant',
  templateUrl: './fav-restaurant.component.html',
  styleUrls: ['./fav-restaurant.component.css']
})
export class FavRestaurantComponent implements OnInit{
  constructor(private userService:UserService){}
  fav_RestaurantData:any=[]
  ngOnInit(): void {
    
      this.userService.getFavRest().subscribe(res=>{
       
            this.fav_RestaurantData = res;
            console.log(res)
    })
// this.getAllFavRest(); 
    }
  
  // fav_restauerstsData:Array<Restaurant> = []

  
//  getAllFavRest(){
//   this.userService.getFavRest().subscribe(res=>{
//     this.fav_RestaurantData = res;
//     console.log(res)
//   })
 

}
