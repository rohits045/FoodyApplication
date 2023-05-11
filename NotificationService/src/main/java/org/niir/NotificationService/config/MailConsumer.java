package org.niir.NotificationService.config;


import org.niir.NotificationService.domain.Notification;
import org.niir.NotificationService.service.INotificationService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component//to load whole class as object in memory, when appln starts.

public class MailConsumer {
    //consumer pull data from queue

    @Autowired
    private INotificationService notificationService;

    /**
     * It listens to the mail_queue and when it receives a message it sends an email to the receiver.
     *
     * @param foodDTO The object that will be received from the queue.
     */
    //@RabbitListener means this method works as listener , to connected to this queue.
    //listener means-whenever the data is entered in Food queue,data will process
    @RabbitListener(queues = "Food_queue")
    public void getFoodDtoFromQueue(FoodDTO foodDTO){
        Notification notification =new Notification(foodDTO.getReceiver(),
                foodDTO.getMessageBody() ,foodDTO.getSubject(),null);
        System.out.println(notificationService.sendEmail(notification));
    }

    @RabbitListener(queues = "order_queue")
    public void placeOrderFood (FoodDTO foodDTO){
        Notification notification =new Notification(foodDTO.getReceiver(),
                foodDTO.getMessageBody() ,foodDTO.getSubject(),null);
        System.out.println(notificationService.sendEmail(notification));
    }
}
