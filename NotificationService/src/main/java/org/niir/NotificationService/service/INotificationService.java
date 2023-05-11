package org.niir.NotificationService.service;

import org.niir.NotificationService.config.FoodDTO;
import org.niir.NotificationService.domain.Notification;
import org.springframework.messaging.handler.annotation.Payload;

public interface INotificationService {
//    public Notification getAllNotification(String emailId);
////    public void saveNotification(FoodDTO foodDTO);
//
//
//    public void saveNotification(FoodDTO foodDTO);

    // Sends an email with the specified data
    String sendEmail(Notification notification);

    // Generates an OTP and sends it to the specified email address
    String generateOtpAndSendEmail(String receiverEmail);

    // Verifies the OTP for the specified email address
//    String checkOtp(String Otp);

    int checkOtp(int Otp);
}
