package foodieapp.UserServices.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {
    @Id
    private String emailId;
    private byte[] profilePicture;
    private String firstName;
    private String lastName;
@Transient
    private String password;

    private List<Restaurant> favouriteRestaurant;
    private List<Cuisine> favouriteCuisine;
    private List<Address> addressList;
    private List<OrderCuisine>orderCuisineList;

}
