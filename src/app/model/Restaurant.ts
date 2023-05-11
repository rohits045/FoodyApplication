import { Cuisine } from "./Cuisine";

export class Restaurant{
    
        restaurantId:any;
        restaurantName:any;
        restaurantLocation:any;
        typeOfRestaurant: any;
        addressOfRestaurant:any;
        picByte:any;
        restaurant_rating:any 
        cuisineList:Cuisine[] = []

constructor(       restaurantId:any,
        restaurantName:any,
        restaurantLocation:any,
    typeOfRestaurant: any,
    addressOfRestaurant:any,
    picByte:any,
    restaurant_rating:any
    ,cuisineList:Cuisine[]
     ){
           this.restaurantId= restaurantId;
            this.restaurantName= restaurantName;
             this.restaurantLocation= restaurantLocation;
              this.typeOfRestaurant= typeOfRestaurant;
              this.addressOfRestaurant= addressOfRestaurant;
              this.picByte= picByte;
              this.restaurant_rating= restaurant_rating;
              this.cuisineList = cuisineList;
}

}