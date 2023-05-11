package org.niir.NotificationService.controller;

import org.niir.NotificationService.domain.Notification;
import org.niir.NotificationService.service.INotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/notificationService")
public class NotificationController {

    INotificationService notificationService;

    @Autowired
    public NotificationController(INotificationService notificationService) {
        this.notificationService = notificationService;
    }

//    @GetMapping("/notification/{emailId}")
//    public ResponseEntity<?> getNotification(@PathVariable String emailId){
//        return new ResponseEntity<>(notificationService.getAllNotification(emailId),HttpStatus.OK);
//
//    }


   // http://localhost:9098/mail-app/send-mail

    @PostMapping("/sendMail")
    public ResponseEntity<?> sendEmail(@RequestBody Notification notification) {
        return new ResponseEntity<>(notificationService.sendEmail(notification), HttpStatus.OK);
    }

    //http://localhost:9098/mail-app/send-otp?receiverEmail=user@example.com

    @GetMapping("/sendOtp")
    public ResponseEntity<?> sendOtp(@RequestParam String receiverEmail) {
        return new ResponseEntity<>(notificationService.generateOtpAndSendEmail(receiverEmail), HttpStatus.OK);
    }

   // http://localhost:9098/mail-app/check/{Otp}

    @GetMapping("/check/{Otp}")
    public ResponseEntity<?> checkOtp(@PathVariable int Otp) {
        return new ResponseEntity<>(notificationService.checkOtp(Otp), HttpStatus.OK);
    }

}
