package foodieapp.UserServices.config;//package foodieapp.UserServices.config;
//
//import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//public class MessageConfiguration_n {
////    private String exchangeName="FoodExchange";
////    private String queueName="FoodQueue";
////    @Bean
////    public DirectExchange getDirectExchange(){
////        return new DirectExchange(exchangeName);
////    }
////    @Bean
////    public Queue getQueue(){
////        return new Queue(queueName);
////    }
////    @Bean
////    public Jackson2JsonMessageConverter getJackson2JsonMessageConverter(){
////        return new Jackson2JsonMessageConverter();
////    }
////
////    @Bean
////    public Binding getBinding(){
////        return BindingBuilder.bind(getQueue()).to(getDirectExchange()).with("Food_routing");
////    }
//
//
//
////    @Bean
////    public Jackson2JsonMessageConverter getMessageConvertor(){
////
////        return new Jackson2JsonMessageConverter();
////    }
//}
