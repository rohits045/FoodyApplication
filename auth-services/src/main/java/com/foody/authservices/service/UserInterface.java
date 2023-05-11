package com.foody.authservices.service;

import com.foody.authservices.domain.User;

import java.util.List;

public interface UserInterface {
    public User saveUser(User user) ;
    public User loginCheck(String emailId, String password) ;
    public User getUserDetails(String emailId);
    public List<User> getAllAppUser();

    public String deleteUser(String email);

}

