package com.foody.restaurantServices.repository;

import com.foody.restaurantServices.domain.Restaurant;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RestaurantRepository extends MongoRepository<Restaurant, String> {
}
