package foodieapp.UserServices.config;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FoodDTO {

//    JSONObject jsonObject;
    private String receiver;
    private String messageBody;
    private String subject;
}
