package foodieapp.UserServices.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Address {
    @Id
    private String houseNo;
    private String street;
    private String city;
    private String pinCode;
}
