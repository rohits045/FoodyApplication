package foodieapp.UserServices.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import exception.UserNotFoundException;
import feign.Param;
import foodieapp.UserServices.Repository.UserRepository;
import foodieapp.UserServices.domain.*;
import foodieapp.UserServices.services.UserServiceInterface;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;

//@CrossOrigin(origins = "*", methods = {RequestMethod,, RequestMethod.OPTIONS}, allowedHeaders = {"Content-Type", "X-Requested-With", "accept", "Origin", "Access-Control-Request-Method", "Access-Control-Request-Headers"}, exposedHeaders = {"Access-Control-Allow-Origin", "Access-Control-Allow-Credentials"})
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/userService")
public class UserController {
    @Autowired
    UserServiceInterface userServiceInterface;

    private ResponseEntity<?> responseEntity;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/addAddress/{emailId}")
    public ResponseEntity<?> addAdressBasedOnEmailId(@RequestBody Address address, @PathVariable String emailId) {
        responseEntity = new ResponseEntity<>(userServiceInterface.addAddress(address, emailId), HttpStatus.OK);
        return responseEntity;
    }

//    @PostMapping("/addFavCuisine/{emailId}")
//    public ResponseEntity<?> getAddress(@RequestBody Cuisine cuisine, @PathVariable String emailId) {
//        responseEntity = new ResponseEntity<>(userServiceInterface.addFavouriteCuisine(cuisine, emailId), HttpStatus.OK);
//        return responseEntity;
//    }

//    http://localhost:9007/api/userService/addFavCuisine/{emailId}

@PostMapping(value="/addFavCuisine/{emailId}",consumes =  MediaType.MULTIPART_FORM_DATA_VALUE,
        headers = "content-type=multipart/*")
public  ResponseEntity<?> addFavouriteCuisineByemailId(@RequestParam("file") MultipartFile file, @RequestParam("favCuisine") String favCuisine,@PathVariable String emailId) throws IOException {
    File file1=new File("E://couisines_image//"+file.getOriginalFilename());
    file1.createNewFile();
    FileOutputStream fileOut = new FileOutputStream(file1);
    byte[] convertFile= FileUtils.readFileToByteArray(new File(file1.getPath()));
    String encodedFile= Base64.encodeBase64String(convertFile);
    System.out.println(encodedFile);
    fileOut.write(file.getBytes());
    fileOut.close();

//   --------------------------------------------------------------
    Cuisine myCuisine=new ObjectMapper().readValue(favCuisine, Cuisine.class);
    myCuisine.setImage(file.getBytes());
    User myUser=userServiceInterface.addFavouriteCuisine(myCuisine,emailId);
    responseEntity=new ResponseEntity<>( myUser,HttpStatus.OK);
    return  responseEntity;
}

    @GetMapping("/getAddress/{emailId}")
    public ResponseEntity<?> getAdressByEmailId(@PathVariable String emailId) {
        responseEntity = new ResponseEntity<>(userServiceInterface.getAddress(emailId), HttpStatus.OK);
        return responseEntity;
    }
    // http://localhost:9007/api/userService/getCuisine/{emailId}
    @GetMapping("/getCuisine/{emailId}")
    public ResponseEntity<?> getCuisineByEmailId(@PathVariable String emailId) {
        responseEntity = new ResponseEntity<>(userServiceInterface.getFavouriteCuisine(emailId), HttpStatus.OK);
        return responseEntity;
    }
    // http://localhost:9007/api/userService/getFavRest/{emailId}
    @GetMapping("/getFavRest/{emailId}")
    public ResponseEntity<?> getFavRestaurantByEmailId(@PathVariable String emailId) {
        responseEntity = new ResponseEntity<>(userServiceInterface.getFavouriteRestaurant(emailId), HttpStatus.OK);
        return responseEntity;
    }
    // http://localhost:9007/api/userService/user

    @GetMapping("user/{emailId}")
    public ResponseEntity<?> getUserDetails(@PathVariable String emailId) {
        responseEntity = new ResponseEntity<>(userServiceInterface.getUserDetails(emailId), HttpStatus.OK);
        return responseEntity;
    }
    // http://localhost:9007/api/userService/users

    @GetMapping("users/{emailId}")
    public ResponseEntity<?> getUserAllDetailsData(@PathVariable String emailId) {
        responseEntity = new ResponseEntity<>(userServiceInterface.getUserAllDetails(emailId), HttpStatus.OK);
        return responseEntity;
    }
    @GetMapping("/orderList/{emailId}")
    public ResponseEntity<?>getOrderList(@PathVariable String emailId){
        responseEntity = new ResponseEntity<>(userServiceInterface.getAllOrder(emailId),HttpStatus.OK);
        return responseEntity;
    }
@GetMapping("userses/{emailId}")
public ResponseEntity<?> getUserAllDetailsData(HttpServletRequest httpServletRequest) {

         String currentUser = (String) httpServletRequest.getAttribute("userdetailsemailId");
    System.out.println(currentUser);
    try{
        return new ResponseEntity<>(userServiceInterface.getUserAllDetails(currentUser),HttpStatus.OK);
    }finally {
        System.out.println("Menthod calling");
    }

//    responseEntity = new ResponseEntity<>(userServiceInterface.getUserAllDetails(emailId), HttpStatus.OK);
//    return responseEntity;
}
    @DeleteMapping("/deleteAddress/{emailId}/{houseNo}")
    public ResponseEntity<?> deleteAddressByEmailId(@PathVariable String emailId, @PathVariable String houseNo) {
        responseEntity = new ResponseEntity<>(userServiceInterface.deleteAddress(houseNo, emailId), HttpStatus.OK);
        return responseEntity;
    }
    @DeleteMapping("/delete/{emailId}/{restaurantId}")
    public  ResponseEntity<?> deleteFavRestaurtantByEmailId(@PathVariable String emailId,@PathVariable String restaurantId)
    {
        responseEntity=new ResponseEntity<>(userServiceInterface.DeleteFavouriteRestaurant(restaurantId,emailId),HttpStatus.OK);
        return  responseEntity;
    }

    @DeleteMapping("/deleteCuisine/{emailId}/{cuisineId}")
    public ResponseEntity<?> deleteCuisineByEmailId(@PathVariable String cuisineId, @PathVariable String emailId) {
        responseEntity = new ResponseEntity<>(userServiceInterface.DeleteFavouriteCuisine(cuisineId, emailId), HttpStatus.OK);
        return responseEntity;
    }

   // http://localhost:65001/api/userService/userRegister
    @PostMapping(value="/userRegister" ,consumes =  MediaType.MULTIPART_FORM_DATA_VALUE,
            headers = "content-type=multipart/*")
    public ResponseEntity<?> registerUser(@RequestParam("file") MultipartFile file, @RequestParam("commonUser") String commonUser) throws IOException {
        File file1=new File("E://User_profile_image//"+file.getOriginalFilename());
        file1.createNewFile();
        FileOutputStream fileOut = new FileOutputStream(file1);
      byte[] convertFile= FileUtils.readFileToByteArray(new File(file1.getPath()));
      String encodedFile= Base64.encodeBase64String(convertFile);
        System.out.println(encodedFile);
        fileOut.write(file.getBytes());
           fileOut.close();

//      -------------------CommonUser------------------------------------
        CommonUser user = new ObjectMapper().readValue(commonUser, CommonUser.class);
        user.setProfilePicture(file.getBytes());
        User dbCommon = userServiceInterface.registerUser(user);
        responseEntity = new ResponseEntity<>(dbCommon, HttpStatus.OK);

        user.setRole("USER");   //set role for user
        return responseEntity;
    }

    @PostMapping(value="/adminRegister",consumes =  MediaType.MULTIPART_FORM_DATA_VALUE,
            headers = "content-type=multipart/*")
    public ResponseEntity<?> registerAdmin (@RequestParam("file") MultipartFile file , @RequestParam("commonUser") String commonUser) throws IOException {

        File file1=new File("E://adminProfileImage//"+file.getOriginalFilename());
        file1.createNewFile();
        FileOutputStream fileOut = new FileOutputStream(file1);
        byte[] convertFile= FileUtils.readFileToByteArray(new File(file1.getPath()));
        String encodedFile= Base64.encodeBase64String(convertFile);
        System.out.println(encodedFile);
        fileOut.write(file.getBytes());
        fileOut.close();

//       -------------------------------------------------------
        CommonUser admin = new ObjectMapper().readValue(commonUser,CommonUser.class);
        admin.setProfilePicture(file.getBytes());
        User common = userServiceInterface.registerAdmin(admin);
        responseEntity = new ResponseEntity<>(common , HttpStatus.OK);

        admin.setRole("ADMIN"); //set role for admin
        return responseEntity;
    }


    @PostMapping(value="/addRestaurant/{emailId}",consumes =  MediaType.MULTIPART_FORM_DATA_VALUE,
            headers = "content-type=multipart/*")
    public ResponseEntity<?> addFavouriteRestaurantByEmailId(@RequestParam("file") MultipartFile file, @RequestParam("favRes") String favReq, @PathVariable String emailId) throws IOException {
        File file1=new File("E://Restaurant_Images//"+file.getOriginalFilename());
        file1.createNewFile();
        FileOutputStream fileOut = new FileOutputStream(file1);
        byte[] convertFile= FileUtils.readFileToByteArray(new File(file1.getPath()));
        String encodedFile= Base64.encodeBase64String(convertFile);
        System.out.println(encodedFile);
        fileOut.write(file.getBytes());
        fileOut.close();


//       -------------------------
        Restaurant myRes = new ObjectMapper().readValue(favReq, Restaurant.class);
        myRes.setPicByte(file.getBytes());
//        myRes.setPicByte(file.getBytes());
//        myRes.setFileName(file.getOriginalFilename());
        User myUser = userServiceInterface.addFavouriteRestaurant(myRes, emailId);
        responseEntity = new ResponseEntity<>(myUser, HttpStatus.OK);
        return responseEntity;
    }
    @PostMapping(value="/ownerRegister",consumes =  MediaType.MULTIPART_FORM_DATA_VALUE,
            headers = "content-type=multipart/*")
    public ResponseEntity<?> registerOwner (@RequestParam("file") MultipartFile file , @RequestParam("commonUser") String commonUser) throws IOException {

        File file1=new File("E://Admin_Restaurant_Image//"+file.getOriginalFilename());
        file1.createNewFile();
        FileOutputStream fileOut = new FileOutputStream(file1);
        byte[] convertFile= FileUtils.readFileToByteArray(new File(file1.getPath()));
        String encodedFile= Base64.encodeBase64String(convertFile);
        System.out.println(encodedFile);
        fileOut.write(file.getBytes());
        fileOut.close();

//       -------------------------------------------------------
        CommonUser owner = new ObjectMapper().readValue(commonUser,CommonUser.class);
        owner.setProfilePicture(file.getBytes());
        User common = userServiceInterface.registerOwner(owner);
        responseEntity = new ResponseEntity<>(common , HttpStatus.OK);

        owner.setRole("Owner"); //set role for admin
        return responseEntity;
    }
    @PostMapping(value="/addFavRestaurant/{emailId}",consumes =  MediaType.MULTIPART_FORM_DATA_VALUE,
            headers = "content-type=multipart/*")
    public ResponseEntity<?> addFavouriteRestaurantByEmailIdInList( @RequestParam String favReq, @PathVariable String emailId) throws IOException {

//    public ResponseEntity<?> addFavouriteRestaurantByEmailIdInList(@RequestParam("file") MultipartFile file, @RequestParam("favRes") String favReq, @PathVariable String emailId) throws IOException {
//        File file1=new File("E://fav-restaurant//"+file.getOriginalFilename());
//        file1.createNewFile();
//        FileInputStream fileOut = new FileInputStream(file1);
//
////        FileOutputStream fileOut = new FileOutputStream(file1);
//        byte[] convertFile= FileUtils.readFileToByteArray(new File(file1.getPath()));
////        String encodedFile= Base64.encodeBase64String(convertFile);
//        String encodedFile=   Base64.encodeBase64String(convertFile);
//        System.out.println(encodedFile);
////        fileOut.write(file.getBytes());
//        fileOut.read(file.getBytes());
//        fileOut.close();


//       -------------------------
        Restaurant myRes = new ObjectMapper().readValue(favReq, Restaurant.class);
//        myRes.setPicByte(file.getBytes());
//        myRes.setFileName(file.getOriginalFilename());
        myRes.setRestaurantId(myRes.getRestaurantId());
        myRes.setRestaurantName(myRes.getRestaurantName());
        myRes.setRestaurantLocation(myRes.getRestaurantLocation());
        User myUser = userServiceInterface.addFavouriteRestaurant(myRes, emailId);
        responseEntity = new ResponseEntity<>(myUser, HttpStatus.OK);
        return responseEntity;
    }
//    http://localhost:65001/api/userService/addFav/{emailId}
    @PostMapping("/addFav/{emailId}")
    public ResponseEntity<?>saveFavRest(@PathVariable String emailId ,@RequestParam String restaurantName, @RequestParam String restaurantId,
                                        @RequestParam String restaurantLocation , @RequestParam float restaurant_rating){
        Restaurant restaurant = new Restaurant(restaurantId,restaurantName,restaurantLocation,null,null,restaurant_rating,new ArrayList<Cuisine>());
      restaurant.setRestaurantId(restaurantId);
       restaurant.setRestaurantName(restaurantName);
       restaurant.setRestaurantLocation(restaurantLocation);
       restaurant.setRestaurant_rating(restaurant_rating);
        System.out.println(restaurant);
        return new ResponseEntity<>(userServiceInterface.addFavouriteRestaurantData(emailId,restaurant),HttpStatus.OK);
    }
    @PostMapping("/addFavCuisineData/{emailId}")
    public ResponseEntity<?>saveFavCuisine(@PathVariable String emailId ,@RequestParam String cuisineName, @RequestParam String cuisineId,
                                        @RequestParam String cuisineDescription , @RequestParam int price){
        Cuisine cuisine = new Cuisine(cuisineId,cuisineName,cuisineDescription,price,null,null);
        cuisine.setCuisineId(cuisineId);
        cuisine.setCuisineName(cuisineName);
         cuisine.setCuisineDescription(cuisineDescription);
         cuisine.setPrice(price);
        System.out.println(cuisine);
        return new ResponseEntity<>(userServiceInterface.addFavouriteCuisineData(emailId,cuisine),HttpStatus.OK);
    }
    @PostMapping ("/order/{emailId}")
    public  ResponseEntity <?> addToOrderList(@PathVariable String emailId, @RequestParam String cuisineId, @RequestParam String cuisineName,
                                              @RequestParam String cuisineDescription,
                                              @RequestParam int qty,@RequestParam int price, @RequestParam int total)
    {
        OrderCuisine orderCuisine=new OrderCuisine(cuisineId,cuisineName,cuisineDescription,qty,price,total);
//        orderCuisine.setCuisineId(cuisineId);
//        orderCuisine.setCuisineName(cuisineName);
//        orderCuisine.setCuisineDescription(cuisineDescription);
//        orderCuisine.setQty(qty);
//        orderCuisine.setPrice(price);
//        orderCuisine.setTotal(total);
        System.out.println(orderCuisine);
        System.out.println(emailId);
        return  new ResponseEntity<>(userServiceInterface.OrderCuisineData(emailId,orderCuisine),HttpStatus.OK);
    }
}
