package com.foody.restaurantServices.domain;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class Cuisine {

    @Id
    private String cuisineId;
    private String cuisineName;
    private String cuisineDescription;
    private int price;
    private int qty;
    private byte[] image;
    private int total;
}
