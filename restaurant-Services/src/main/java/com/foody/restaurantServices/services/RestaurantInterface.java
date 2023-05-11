package com.foody.restaurantServices.services;

import com.foody.restaurantServices.domain.Cuisine;
import com.foody.restaurantServices.domain.Restaurant;

import java.util.List;

public interface RestaurantInterface {

    Restaurant addRestaurant(Restaurant restaurant);
    Restaurant addCuisineToRestaurant(Cuisine cuisine, String restaurantId) ;
    Restaurant deleteCuisineFromRestaurant(String restaurantId, String cuisineId);
    List<Cuisine> getAllCuisine(String restaurantId) ;
    List<Restaurant> getAllRestaurant() ;
    public Restaurant getRestaurantDetails(String restaurantId) ;
    boolean deleteProduct(String restaurantId);
    public List<Restaurant> getRestaurantsByCity(String city);
}
