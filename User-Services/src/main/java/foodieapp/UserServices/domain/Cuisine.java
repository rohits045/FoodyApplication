package foodieapp.UserServices.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document
public class Cuisine {
    @Id
    private String cuisineId;
    private String cuisineName;
    private String cuisineDescription;
    private int price;
    private int qty;
    private byte[] image;

    public Cuisine(String cuisineId, String cuisineName, String cuisineDescription, int price, Object o2, Object o3) {
    }
}

