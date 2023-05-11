package com.foody.restaurantServices.domain;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Document
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Restaurant {
    @Id
    private String restaurantId;
    private String restaurantName;
    private String restaurantLocation;
    private String typeOfRestaurant;
    private String addressOfRestaurant;
    private  float restaurant_rating;
    private List<Cuisine> cuisineList;
    private byte[] picByte;
    private String fileName;
}
