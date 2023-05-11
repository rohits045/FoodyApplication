//package org.niir.NotificationService.config;
//
//import org.springframework.amqp.core.Binding;
//import org.springframework.amqp.core.BindingBuilder;
//import org.springframework.amqp.core.DirectExchange;
//import org.springframework.amqp.core.Queue;
//import org.springframework.amqp.rabbit.connection.CachingConnectionFactory;
//import org.springframework.amqp.rabbit.connection.ConnectionFactory;
//import org.springframework.amqp.rabbit.core.RabbitTemplate;
//import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
//import org.springframework.amqp.support.converter.MessageConverter;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//public class MessageConfiguration {
//    //exchange
//    //queue
//    //binding
//    //jackson2jsonmessageconvertor
//
////    private String exchangeName = "orderFoodExchange";
////    private String queueName = "userFoodQueue";
////    @Bean
////    public DirectExchange getDirectExchange(){
////        return new DirectExchange(exchangeName);
////    }
////    @Bean
////    public Queue getQueue(){
////        return new Queue(queueName);
////    }
////    @Bean
////    public Jackson2JsonMessageConverter getJackson2JsonMessageConvertor(){
////        return new Jackson2JsonMessageConverter();
////    }
////    @Bean
////    public Binding getBinding(){
////        return BindingBuilder.bind(getQueue()).to(getDirectExchange()).with("Restaurant_routing");
////    }
//
////    @Bean
////    public ConnectionFactory connectionFactory() {
////        CachingConnectionFactory connectionFactory = new CachingConnectionFactory("<url.to.guest>");
////        connectionFactory.setUsername("<username>");
////        connectionFactory.setPassword("<password>");
////        return connectionFactory;
////    }
////
////        @Bean
////    public DirectExchange getDirectExchange(){
////        return new DirectExchange(exchangeName);
////    }
////
////    @Bean
////    public Queue simpleQueue() {
////        return new Queue(queueName);
////    }
////
////    @Bean
////    public MessageConverter jsonMessageConverter() {
////        return new Jackson2JsonMessageConverter();
////    }
////
////    @Bean
////    public RabbitTemplate rabbitTemplate() {
////        RabbitTemplate template = new RabbitTemplate(connectionFactory());
////        template.setRoutingKey("Restaurant_routing");
////        template.setMessageConverter(jsonMessageConverter());
////        return template;
////    }
//}
//
//
