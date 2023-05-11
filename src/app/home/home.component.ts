import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AddToCartService } from '../services/add-to-cart.service';
import { AddRestaurantService } from '../services/restaurant-services/add-restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private get_RestaturantsService:AddRestaurantService , private router:Router,private cart_service:AddToCartService){};
  searchKey:string='';
  public searchTerm : string ='';
  ngOnInit(): void {
    this.getAll_restaurants();
    // -------------------------------------------------
    this.cart_service.search.subscribe(val=>{
      this.searchKey = val;
    })
  }


All_restauerstsData:any=[]
getAll_restaurants(){
 return this.get_RestaturantsService.getAllRestaurantsWithCouisin().subscribe(
    res=>{
      this.All_restauerstsData = res;
      console.log(res)
    }
  )
}

// id:any
// showRestaurant(){
//   this.route.navigate(["/all-restaurant/+id"])
//   this.getAll_restaurants();
// }

// city_data:any
// searchByCity(){
//   return this.get_RestaturantsService.searchRestaurantsByCityName(this.city_data.value).subscribe(
//     city_response=>{
//       console.log()
//     }
//   )
// }






}
