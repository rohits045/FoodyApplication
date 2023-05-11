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
public class CommonUser {
    @Id
    private String emailId;
    private byte[] profilePicture;
    private String firstName;
    private String lastName;
    private String password;
    private String role;
}
