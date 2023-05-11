package foodieapp.UserServices.services;


//import foodieapp.UserServices.domain.*;

//import foodieapp.UserServices.domain.*;

import foodieapp.UserServices.domain.*;

import java.util.List;

public interface UserServiceInterface {

    User registerUser(CommonUser commonUser);
    User registerAdmin(CommonUser commonUser);
    public User registerOwner(CommonUser commonUser);
    User addAddress(Address address, String emailId);
    User addFavouriteCuisine(Cuisine cuisine, String emailId);
    User addFavouriteRestaurant(Restaurant restaurant, String emailId);
    List<Address> getAddress(String emailId);
    List<Cuisine> getFavouriteCuisine(String emailId);
    List<Restaurant> getFavouriteRestaurant(String emailId);
    User deleteAddress (String houseNo, String email);
    User DeleteFavouriteCuisine (String cuisineId, String emailId);
    User DeleteFavouriteRestaurant (String restaurantId, String emailId);
    User getUserDetails(String emailId);
    User getUserAllDetails(String emailId);
    User addRestaurant(String emailID, String restaurantId);
    public User addFavouriteRestaurantData(String emailID, Restaurant restaurant);
    public User addFavouriteCuisineData(String emailID, Cuisine cuisine);
    public User OrderCuisineData(String emilID, OrderCuisine orderCuisine);

    public List<OrderCuisine>getAllOrder (String emailID);
}
