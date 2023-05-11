import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZomatoServiceService {

  constructor(private httpclient:HttpClient) { }

//  api_key:any="c9f9ff5254mshbc8d3a8a32e949bp1aa47cjsnfd83f8a91c3f"
//  'X-RapidAPI-Key': 'c9f9ff5254mshbc8d3a8a32e949bp1aa47cjsnfd83f8a91c3f',
// 		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
base_url:any="https://random-recipes.p.rapidapi.com/ai-quotes"

 getRecipes():Observable<any>{
 let head={
  headers :  new HttpHeaders().set('X-RapidAPI-Key', 'c9f9ff5254mshbc8d3a8a32e949bp1aa47cjsnfd83f8a91c3f').set('X-RapidAPI-Host', 'random-recipes.p.rapidapi.com')
} 
  return this.httpclient.get(this.base_url+"/12",head);
 }

}
