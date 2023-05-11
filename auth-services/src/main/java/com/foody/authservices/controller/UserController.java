package com.foody.authservices.controller;

import com.foody.authservices.domain.User;
import com.foody.authservices.repository.UserRepository;
import com.foody.authservices.service.IGenerateToken;
import com.foody.authservices.service.UserInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
@CrossOrigin
@RestController
@RequestMapping("/api/authService")
public class UserController {
    @Autowired
   private UserInterface userInterface;
    @Autowired
    IGenerateToken generateToken;

    @PostMapping("/userRegister")
    public ResponseEntity<?> registerUser(@RequestBody User user)
    {
        user.setRole("USER");
        return new ResponseEntity<>(userInterface.saveUser(user), HttpStatus.OK);
    }
    @PostMapping("/adminRegister")
    public ResponseEntity<?> registerAdmin(@RequestBody User user)
    {
        user.setRole("ADMIN");
        return new ResponseEntity<>(userInterface.saveUser(user), HttpStatus.OK);
    }
    @PostMapping("/ownerRegister")
    public ResponseEntity<?> registerOwner(@RequestBody User user)
    {
        user.setRole("Owner");
        return new ResponseEntity<>(userInterface.saveUser(user), HttpStatus.OK);
    }
@GetMapping("/{emailId}")
    public  ResponseEntity<?> getUserDetails(@PathVariable String emailId)
{
    return new ResponseEntity<>(userInterface.getUserDetails(emailId),HttpStatus.OK);
}
    @GetMapping("/getAll")
    public  ResponseEntity<?> getAllDetails()
    {
        return new ResponseEntity<>(userInterface.getAllAppUser(),HttpStatus.OK);
    }
@PostMapping("/loginUser")
    public  ResponseEntity<?> loginUser(@RequestBody User user)
{
  User tokenCheck=userInterface.loginCheck(user.getEmailId(), user.getPassword());
  if (tokenCheck!=null)
  {
      Map<String,String> newMap=generateToken.getToken(tokenCheck);
      return new ResponseEntity<>(newMap,HttpStatus.OK);
  }
    return new ResponseEntity<>("invalid User or User Does not Exist",HttpStatus.NOT_FOUND);
}


    @DeleteMapping("/delete/{emailId}")
    public ResponseEntity<?> deleteUser (@PathVariable String emailId) {
        return new ResponseEntity<>(userInterface.deleteUser(emailId),HttpStatus.OK);
    }
}
