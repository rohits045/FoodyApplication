package com.foody.restaurantServices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class RestaurantServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestaurantServicesApplication.class, args);
	}

}
