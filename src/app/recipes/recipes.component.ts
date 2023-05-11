import { Component, OnInit } from '@angular/core';
import { ZomatoServiceService } from '../services/zomato-service/zomato-service.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{
  constructor(private zomato_service:ZomatoServiceService){}
  ngOnInit(): void {
    this.getAllRecipes();
  }

searchRecipes_Data:any=[];


getAllRecipes(){
  return this.zomato_service.getRecipes().subscribe(
    res=>{
    this.searchRecipes_Data=res;
    console.log(res,'ingredients_data')
    
    console.log(res,'instructions')

    console.log("All Data fetch form api ")
    }
  )

}
}
