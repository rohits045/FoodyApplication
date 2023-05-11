package foodieapp.UserServices.services;


import foodieapp.UserServices.Repository.UserRepository;
import foodieapp.UserServices.config.FoodDTO;
import foodieapp.UserServices.config.MailProducer;
import foodieapp.UserServices.domain.*;

import foodieapp.UserServices.proxy.UserProxy;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class USerServiceImlpe implements UserServiceInterface{


   UserRepository userRepository;
UserProxy userProxy;
@Autowired
MailProducer mailProducer;

@Autowired
    public USerServiceImlpe(UserRepository userRepository, UserProxy userProxy) {
        this.userRepository = userRepository;
        this.userProxy = userProxy;
    }

    @Override
    public User registerUser(CommonUser commonUser) {
        User user=new User(commonUser.getEmailId(),commonUser.getProfilePicture(),
                commonUser.getFirstName(), commonUser.getLastName(), commonUser.getPassword(),
                new ArrayList<>(),new ArrayList<>(),new ArrayList<>(),new ArrayList<>());
        if (userRepository.findById(user.getEmailId()).isPresent())
        {
            return null;
        }
        UserDTO userDTO=new UserDTO();
        userDTO.setEmailId(commonUser.getEmailId());
        userDTO.setPassword(commonUser.getPassword());
        userProxy.userRegister(userDTO);
        User result = userRepository.save(user);
        FoodDTO foodDTO = new FoodDTO(result.getEmailId(),"Welcome Restaurant User, Thank you for Registration with Foody app. Enjoy Your Favourite Meal","SignUp Successfully...");
        mailProducer.sendEmailDtoToQueue(foodDTO);
        return userRepository.save(user);

    }

    @Override
    public User registerAdmin(CommonUser commonUser) {
    User user = new User(commonUser.getEmailId(), commonUser.getProfilePicture(),
            commonUser.getFirstName(), commonUser.getLastName(), commonUser.getPassword(), new ArrayList<>(),new ArrayList<>(),new ArrayList<>(),new ArrayList<>());

        if (userRepository.findById(user.getEmailId()).isPresent())
        {
            return null;
        }
        UserDTO userdto = new UserDTO();   //creating obj for dto
        userdto.setEmailId(commonUser.getEmailId());
        userdto.setPassword(commonUser.getPassword());
        userProxy.adminRegister(userdto);
        User result = userRepository.save(user);
        FoodDTO foodDTO = new FoodDTO(result.getEmailId(),"Welcome Admin ! , Thank you for Registration with Foody app. Enjoy Your Favourite Meal","SignUp Successfully...");
        mailProducer.sendEmailDtoToQueue(foodDTO);
        return userRepository.save(user);
    }

    @Override
    public User registerOwner(CommonUser commonUser) {
        User user = new User(commonUser.getEmailId(), commonUser.getProfilePicture(),
                commonUser.getFirstName(), commonUser.getLastName(), commonUser.getPassword(),
                new ArrayList<>(),new ArrayList<>(),new ArrayList<>(),new ArrayList<>());

        if (userRepository.findById(user.getEmailId()).isPresent())
        {
            return null;
        }
        UserDTO userdto = new UserDTO();   //creating obj for dto
        userdto.setEmailId(commonUser.getEmailId());
        userdto.setPassword(commonUser.getPassword());
        userProxy.registerOwner(userdto);
        User result = userRepository.save(user);
        FoodDTO foodDTO = new FoodDTO(result.getEmailId(),"Welcome Restaurant Owner, Thank you for Registration with Foody app. Enjoy Your Favourite Meal","SignUp Successfully...");
        mailProducer.sendEmailDtoToQueue(foodDTO);
        return userRepository.save(user);
    }

    @Override
    public User addAddress(Address address, String emailId) {
       List<Address> addressList=new ArrayList<>();
       User user=userRepository.findById(emailId).get();
       addressList=user.getAddressList();
       if (addressList==null)
       {
           user.setAddressList(Arrays.asList(address));
       } else if (addressList.contains(address)) {
           return  null;
       }
       else {
           addressList.add(address);
           user.setAddressList(addressList);
       }
       return userRepository.save(user);
    }

    @Override
    public User addFavouriteCuisine(Cuisine cuisine, String emailId) {
       List<Cuisine> cuisineList=new ArrayList<>();
       User user=userRepository.findById(emailId).get();
       cuisineList=user.getFavouriteCuisine();
       if (cuisineList==null)
       {
           user.setFavouriteCuisine(Arrays.asList(cuisine));
       }
       else {
           cuisineList.add(cuisine);
           user.setFavouriteCuisine(cuisineList);
       }
       return userRepository.save(user);
    }

    @Override
    public User addFavouriteRestaurant(Restaurant restaurant, String emailId) {
        List<Restaurant> favRes=new ArrayList<>();
        User user=userRepository.findById(emailId).get();
        favRes=user.getFavouriteRestaurant();
        if(favRes==null)
        {
            user.setFavouriteRestaurant(Arrays.asList(restaurant));
        }
        else
        {
            favRes.add(restaurant);
            user.setFavouriteRestaurant(favRes);
        }
        return userRepository.save(user);
    }

    @Override
    public List<Address> getAddress(String emailId) {
    return  userRepository.findById(emailId).get().getAddressList();
    }

    @Override
    public List<Cuisine> getFavouriteCuisine(String emailId) {
        return userRepository.findById(emailId).get().getFavouriteCuisine();
    }

    @Override
    public List<Restaurant> getFavouriteRestaurant(String emailId) {
        return userRepository.findById(emailId).get().getFavouriteRestaurant();
    }

    @Override
    public User deleteAddress(String houseNo, String email) {
       User customer=userRepository.findById(email).get();
       customer.getAddressList().removeIf(p->p.getHouseNo().equals(houseNo));
       return userRepository.save(customer);
    }

    @Override
    public User DeleteFavouriteCuisine(String cuisineId, String emailId) {
       User cuisine=userRepository.findById(emailId).get();
       cuisine.getFavouriteCuisine().removeIf(p->p.getCuisineId().equals(cuisineId));
       return userRepository.save(cuisine);
    }

    @Override
    public User DeleteFavouriteRestaurant(String restaurantId, String emailId) {
       User restaurant=userRepository.findById(emailId).get();
       restaurant.getFavouriteRestaurant().removeIf(p->p.getRestaurantId().equals(restaurantId));
       return userRepository.save(restaurant);
    }

    @Override
    public User getUserDetails(String emailId) {
        return userRepository.findById(emailId).get();
    }



    @Override
    public User getUserAllDetails( String emailId) {

    if (userRepository.findById(emailId).isEmpty()){
        return null;
    }else
         return userRepository.findById(emailId).get();
    }


    @Override
    public User addRestaurant(String emailID, String restaurantId) {
    User restaurant = userRepository.findById(emailID).get();
       restaurant =userRepository.findById(restaurantId).get();
       restaurant.getFavouriteCuisine();
        return userRepository.save(restaurant);
    }

    @Override
    public User addFavouriteRestaurantData(String emailID, Restaurant restaurant) {
      User response =userRepository.findById(emailID).get();
      List<Restaurant>userFav=response.getFavouriteRestaurant();
      Restaurant restaurant1=new Restaurant();
      restaurant1.setRestaurantName(restaurant.getRestaurantName());
      restaurant1.setRestaurantLocation(restaurant.getRestaurantLocation());
      restaurant1.setRestaurantId(restaurant1.getRestaurantId());
      restaurant1.setRestaurant_rating(restaurant.getRestaurant_rating());
        boolean msz=true;
      for(Restaurant re:userFav){
          if (re.getRestaurantName().equals(restaurant.getRestaurantName())){

              msz=false;
          break;
          }
      }
        if (msz == true){
            response.getFavouriteRestaurant().add(restaurant);
            return userRepository.save(response);
        }else {
            return null;
        }
    }

    @Override
    public User addFavouriteCuisineData(String emailID, Cuisine cuisine) {
        User response =userRepository.findById(emailID).get();
        List<Cuisine>userFav=response.getFavouriteCuisine();
        Cuisine cuisine1 = new Cuisine();
        cuisine1.setCuisineId(cuisine.getCuisineId());
        cuisine1.setCuisineName(cuisine.getCuisineName());
        cuisine1.setCuisineDescription(cuisine.getCuisineDescription());
        cuisine1.setPrice(cuisine.getPrice());
        boolean msz=true;
        for(Cuisine cu:userFav){
 if (cu.getCuisineName().equals(cuisine.getCuisineName()))
                msz=false;
                break;

        }
        if (msz == true){
            response.getFavouriteCuisine().add(cuisine);
            return userRepository.save(response);
        }else {
            return null;
    }
}

//    @Override
//    public User OrderCuisineData(String emilID, OrderCuisine orderCuisine) {
//
//     User myUser= userRepository.findById(emilID).get();
//     userRepository.findById(emilID).get().getOrderCuisineList();
//     List<OrderCuisine>myOrderList = myUser.getOrderCuisineList();
//      OrderCuisine orderCuisine1=new OrderCuisine();
//
//
//    }

    @Override
    public List<OrderCuisine> getAllOrder(String emailID) {
        return userRepository.findById(emailID).get().getOrderCuisineList();
    }
    @Override
    public User OrderCuisineData(String emilID, OrderCuisine orderCuisine) {
        User myuser= userRepository.findById(emilID).get();
        userRepository.findById(emilID).get().getOrderCuisineList();
        List<OrderCuisine>orderMyCuisines = myuser.getOrderCuisineList();
        OrderCuisine orderCuisine1=new OrderCuisine();

        orderCuisine1.setCuisineId (orderCuisine.getCuisineId());
        orderCuisine1.setCuisineName(orderCuisine.getCuisineName());
        orderCuisine1.setCuisineDescription(orderCuisine.getCuisineDescription());
        orderCuisine1.setQty(orderCuisine.getQty());
        orderCuisine1.setPrice(orderCuisine.getPrice());
        orderCuisine1.setTotal(orderCuisine.getTotal());
        System.out.println(emilID);
        System.out.println(orderCuisine);
        boolean mza=true;
        for(OrderCuisine cu:orderMyCuisines)
        {
            if (cu.getCuisineName().equals(orderCuisine.getCuisineName()))
            {
                mza=false;
                myuser.getOrderCuisineList().add(orderCuisine);
                return userRepository.save(myuser);
            }
        }
        if (mza==true)
        {
            myuser.getOrderCuisineList().add(orderCuisine);
            return userRepository.save(myuser);
        }
        else
        {
            return  null;
        }
    }
}