import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddRestaurantService } from '../services/restaurant-services/add-restaurant.service';

@Component({
  selector: 'app-cousine-add-card',
  templateUrl: './cousine-add-card.component.html',
  styleUrls: ['./cousine-add-card.component.css']
})
export class CousineAddCardComponent  implements OnInit{

  id:any

  ngOnInit(): void {
    console.log(this.activte_Route.snapshot.params['id'])
    this.id = this.activte_Route.snapshot.params['id'];
    this.getAll_restaurants();
    this.getAllDetailsOfRestaurants();
  }
constructor(private get_RestaturantsService:AddRestaurantService 
  , private activte_Route :ActivatedRoute ,private route:Router
  ){}

All_restauerstsData:any

rest_name_data:any
 Allresatuarant_details= localStorage.getItem("rest_data")
  // rest_img:any=localStorage.getItem("rest_data_img")

getAll_restaurants(){
     this.get_RestaturantsService.get_specific_Restaurnt(this.id).subscribe(
      (res_id)=>{
           this.All_restauerstsData=res_id             
           console.log(res_id)
                    
            // console.log("This is Test Solution : "+ JSON.stringify(this.All_restauerstsData,null , "   "))
      }
      
     )
    //  window.location.reload()
}
getAllDetailsOfRestaurants(){
this.get_RestaturantsService.getOnlyOneRestaurants(this.id).subscribe(
  (onlyOne)=>{
    this.rest_name_data = onlyOne
 
      // localStorage.setItem("rest_data",this.rest_name_data.restaurantName);
              
  }
)
}
addToCard(){
 this.route.navigate(['/Add-To-Card'])
}


}
