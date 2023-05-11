package foodieapp.UserServices.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document
public class OrderCuisine {
    @Id
    private String cuisineId;
    private String cuisineName;
    private String cuisineDescription;
    private int qty;
    private int price;

    private  int total;
}
