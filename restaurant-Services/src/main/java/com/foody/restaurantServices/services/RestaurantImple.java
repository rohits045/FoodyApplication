package com.foody.restaurantServices.services;

import com.foody.restaurantServices.domain.Cuisine;
import com.foody.restaurantServices.domain.Restaurant;
import com.foody.restaurantServices.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class RestaurantImple implements  RestaurantInterface{

    @Autowired
    RestaurantRepository restaurantRepository;
    @Override
    public Restaurant addRestaurant(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }

    @Override
    public Restaurant addCuisineToRestaurant(Cuisine cuisine, String restaurantId) {
        Restaurant restaurant = restaurantRepository.findById(restaurantId).get();
        if (restaurant.getCuisineList() == null)
        {
            restaurant.setCuisineList(Arrays.asList(cuisine));
        }
        else
        {
            List<Cuisine> cuisineList = restaurant.getCuisineList();
            cuisineList.add(cuisine);
            restaurant.setCuisineList(cuisineList);

        }
        Restaurant restaurantdb=restaurantRepository.save(restaurant);
        return restaurantdb;
    }

    @Override
    public Restaurant deleteCuisineFromRestaurant(String restaurantId, String cuisineId) {
        boolean cuisineIdPresent = false;
        if (restaurantRepository.findById(restaurantId).isEmpty())
        {
           return  null;
        }
        Restaurant restaurant = restaurantRepository.findById(restaurantId).get();
        List<Cuisine> cuisineList= restaurant.getCuisineList();
        cuisineIdPresent = cuisineList.removeIf(d->d.getCuisineId().equals(cuisineId));
        if (!cuisineIdPresent)
        {
           return  null;
        }
        restaurant.setCuisineList(cuisineList);
        return restaurantRepository.save(restaurant);
    }

    @Override
    public List<Cuisine> getAllCuisine(String restaurantId) {
        if (restaurantRepository.findById(restaurantId).isEmpty())
        {
            return null;
        }
        return restaurantRepository.findById(restaurantId).get().getCuisineList();
    }

    @Override
    public List<Restaurant> getAllRestaurant() {
        return restaurantRepository.findAll();
    }

    @Override
    public Restaurant getRestaurantDetails(String restaurantId) {
        return restaurantRepository.findById(restaurantId).get();
    }

    @Override
    public boolean deleteProduct(String restaurantId) {
//
        if(restaurantRepository.findById(restaurantId).isEmpty())
        {
            return false;
        }
        restaurantRepository.deleteById(restaurantId);
        return true;
    }

    @Override
    public List<Restaurant> getRestaurantsByCity(String city) {
        List<Restaurant> cityRestaurants= restaurantRepository.findAll();
        return cityRestaurants.stream().filter(s->s.getRestaurantLocation().equalsIgnoreCase(city)).collect(Collectors.toList());
    }

}
