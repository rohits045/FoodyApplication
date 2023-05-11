package com.foody.authservices.service;

import com.foody.authservices.domain.User;
import com.foody.authservices.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserImpl implements UserInterface{

    @Autowired
    private UserRepository userRepository;
    @Override
    public User saveUser(User user)  {
        if (userRepository.findById(user.getEmailId()).isPresent())
        {
           return null;
        }
        return userRepository.save(user);
    }

    @Override
    public User loginCheck(String emailId, String password) {
      if (userRepository.findById(emailId).isPresent())
      {
          User user=userRepository.findById(emailId).get();
          if (user.getPassword().equals(password))
          {
              return user;
          }
          else {
              return null;
          }
      }
      else {
          return null;
      }
    }


    @Override
    public User getUserDetails(String emailId) {
        return userRepository.findById(emailId).get();
    }

    @Override
    public List<User> getAllAppUser() {
        return userRepository.findAll();
    }

    @Override
    public String deleteUser(String email) {

        if (userRepository.findById(email).isEmpty()) {
            return "User Does not exist";
        }
        userRepository.deleteById(email);
        return "User deleted Successfully ";
    }
}
