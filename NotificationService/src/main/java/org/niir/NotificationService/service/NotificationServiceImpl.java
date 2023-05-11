package org.niir.NotificationService.service;

import org.niir.NotificationService.config.FoodDTO;
//import org.niir.NotificationService.config.RestaurantDTO;
import org.niir.NotificationService.domain.Notification;
import org.niir.NotificationService.repository.NotifocatioRepository;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import javax.mail.internet.MimeMessage;


import java.io.File;
import java.util.HashMap;
import java.util.Map;


@Service
@Component
public class NotificationServiceImpl implements INotificationService{
    @Autowired
    private NotifocatioRepository notifocatioRepository;

    public int otp;
    private long otpTimestamp;

    @Autowired
    private JavaMailSender javaMailSender;
    @Value("${spring.mail.username}")

    private String sender;


    // Map to store generated OTPs
    private final Map<String, Integer> generatedOtp = new HashMap<>();
    @Override
    public String sendEmail(Notification notification) {
        try{
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message,true);
            helper.setFrom(sender);
            helper.setTo(notification.getReceiver());
            helper.setSubject(notification.getSubject());
            helper.setText(notification.getMessageBody(),true);

            if (notification.getAttachments() != null) {
                FileSystemResource fileSystemResource = new FileSystemResource(new File(notification.getAttachments()));
                helper.addAttachment(fileSystemResource.getFilename(),fileSystemResource);
            }

            javaMailSender.send(message);
            return "Mail Send To:" + notification.getReceiver();
        }
        catch (Exception e) {
            e.printStackTrace();
            return "Mail Sending is Failed";
        }

    }

    @Override

    public String generateOtpAndSendEmail(String receiverEmail) {
        try {
            // generate a 4-digit OTP
            otp = (int) (Math.random() * 9000) + 1000;
            otpTimestamp = System.currentTimeMillis();
            // create a new Notification object
            Notification notification = new Notification();
            notification.setReceiver(receiverEmail);
            notification.setSubject("Your OTP");
            notification.setMessageBody("Your OTP is " + otp);
            // send the email
            sendEmail(notification);

        } catch (Exception e) {
            e.printStackTrace();
            return "Sending OTP failed...";
        }
        return "OTP Sent To " + receiverEmail;
    }

    @Override
    public int checkOtp(int Otp) {
        if (System.currentTimeMillis() - otpTimestamp > 2 * 60 * 1000)
        {
            otp=0;
            System.out.println(Otp);
        }
        System.out.println(otp);
        return otp;
    }

//    @RabbitListener(queues = "FoodQueue")
//    @Override
//    public void saveNotification(FoodDTO foodDTO) {
//        Notification notification = new Notification();
//        String emailId = foodDTO.getJsonObject().get("email").toString();
//        if (notifocatioRepository.findById(emailId).isEmpty()) {
//            notification.setEmailId(emailId);
//        }
//        notification.setEmailId(emailId);
//        notification.setNotificationDescription("msg send from notification service");
//        notification.setJsonObject(foodDTO.getJsonObject());
//        notifocatioRepository.save(notification);
//    }


//


//    @Override
//    public Notification getAllNotification(String emailId) {
//        return notifocatioRepository.findById(emailId).get() ;
//    }
//
//    @RabbitListener (queues = "userFoodQueue")
//    @Override
//    public void saveNotification(FoodDTO foodDTO) {
//
//        //object of notification
//        Notification notification=new Notification();
//        //fetch email from DTO object
////        String emailId=restaurantDTO.getJsonObject().get("emailId").toString();
//        String emailId = foodDTO.getJsonObject().get("food").toString();
//        System.out.println("getting a email id from producer"+emailId);
//        if(notifocatioRepository.findById(emailId).isEmpty()){
//            notification.setEmailId(emailId);
//        }
//        notification.setNotificationDescription("Your Order Is placed Successfully....");
//        notification.setJsonObject(foodDTO.getJsonObject());
//        notifocatioRepository.save(notification);
//    }
}
