package com.foody.restaurantServices.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.foody.restaurantServices.domain.Cuisine;
import com.foody.restaurantServices.domain.Restaurant;
import com.foody.restaurantServices.repository.RestaurantRepository;
import com.foody.restaurantServices.services.RestaurantInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
@CrossOrigin
@RestController
@RequestMapping("/api")
public class Controller {

    @Autowired
    RestaurantInterface restaurantInterface;
    private ResponseEntity<?> responseEntity;
    @Autowired
    private RestaurantRepository restaurantRepository;

    @GetMapping("/get-cuisines/{restaurantId}")
    public ResponseEntity<?> getAllRestaurantCuisine(@PathVariable String restaurantId)
    {
        responseEntity=new ResponseEntity<>(restaurantInterface.getAllCuisine(restaurantId), HttpStatus.OK);
        return responseEntity;
    }

    @GetMapping("/restaurant")
    public ResponseEntity<?> getAllRestaurant ()
    {
        responseEntity=new ResponseEntity<>(restaurantInterface.getAllRestaurant(),HttpStatus.OK);
        return responseEntity;
    }

@GetMapping("/restaurant/{city}")
    public ResponseEntity<?> getAllRestaurantByCityName(@PathVariable String city)
{
    responseEntity=new ResponseEntity<>(restaurantInterface.getRestaurantsByCity(city),HttpStatus.OK);
    return  responseEntity;
}

@GetMapping("/restaurants/{restaurantId}")
    public ResponseEntity<?> getAllRestaurantDetails(@PathVariable String restaurantId)
{
    responseEntity = new ResponseEntity<>(restaurantInterface.getRestaurantDetails(restaurantId),HttpStatus.OK);
    return responseEntity;
}

@DeleteMapping("/{restaurantId}/{cuisine}")
    public  ResponseEntity<?> deleteCuisineByRestaurantId(@PathVariable  String restaurantId,@PathVariable String cuisine)
{
    responseEntity=new ResponseEntity<>(restaurantInterface.deleteCuisineFromRestaurant(restaurantId,cuisine),HttpStatus.OK);
    return responseEntity;
}

@PostMapping("/addRestaurant")
    public  ResponseEntity<?> addRestaurant(@RequestParam("file")MultipartFile file, @RequestParam ("restaurant") String restaurant) throws IOException {
    Restaurant newRestaurant=new ObjectMapper().readValue(restaurant,Restaurant.class);
    newRestaurant.setPicByte(file.getBytes());
    newRestaurant.setFileName(file.getOriginalFilename());
    Restaurant myRestaurant=restaurantInterface.addRestaurant(newRestaurant);
    responseEntity=new ResponseEntity<>(myRestaurant,HttpStatus.OK);
    return responseEntity;
}

@PostMapping("/{restaurantId}")
    public ResponseEntity<?> addCuisineAccordingToRestaurantId(@RequestParam("file") MultipartFile file,@RequestParam("cuisine") String cuisine, @PathVariable String restaurantId) throws IOException {
    Cuisine myCuisine=new ObjectMapper().readValue(cuisine, Cuisine.class);
    myCuisine.setImage(file.getBytes());
    Restaurant newCuisine=restaurantInterface.addCuisineToRestaurant(myCuisine,restaurantId);
    responseEntity=new ResponseEntity<>(newCuisine,HttpStatus.OK);
    return responseEntity;
}

@DeleteMapping("/{restaurantId}")
    public  ResponseEntity<?> deleteRestaurantById(@PathVariable String restaurantId)
{
    responseEntity=new ResponseEntity<>(restaurantInterface.deleteProduct(restaurantId),HttpStatus.OK);
    return responseEntity;
}
}
