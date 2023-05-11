package foodieapp.UserServices.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;
@Document
@AllArgsConstructor
@NoArgsConstructor
@Data
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

    public Restaurant(Object o, String restaurantName, String restaurantLocation, Object o1, Object o2, Object o3, ArrayList<Cuisine> cuisines) {
    }
//private String picByte;

//    private String fileName;
}