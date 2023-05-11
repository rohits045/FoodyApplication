package org.niir.NotificationService.config;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.json.simple.JSONObject;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FoodDTO {

//    JSONObject jsonObject;
    private String receiver;
    private String messageBody;
    private String subject;
}
