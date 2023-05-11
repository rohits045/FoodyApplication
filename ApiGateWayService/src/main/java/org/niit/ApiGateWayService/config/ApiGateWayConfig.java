package org.niit.ApiGateWayService.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Configuration
public class ApiGateWayConfig  {

    @Bean
    public RouteLocator getRoutes(RouteLocatorBuilder builder){


        return builder.routes().
                route(p->p.path("/api/authService/**").
                        uri("lb://AuthService"))
                .route(p->p.path("/api/notificationService/**").uri("lb://notification-service"))
                .route(p->p.path("/api/restaurantService/**").uri("lb://restaurant-service"))
                .route(p->p.path("/api/userService/**").uri("lb://UserService"))
                .build();

    }
}
