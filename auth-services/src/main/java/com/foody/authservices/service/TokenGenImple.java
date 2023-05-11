package com.foody.authservices.service;

import com.foody.authservices.domain.User;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
@Service
public class TokenGenImple implements IGenerateToken{
    @Override
    public Map<String, String> getToken(User user) {
      String jwtToken=null;
      Map<String,Object> result=new HashMap<>();
      result.put("UserData",user);
      jwtToken= Jwts.builder().setClaims(result)
              .setIssuedAt(new Date())
              .signWith(SignatureAlgorithm.HS256,"security_key")
              .compact();
        System.out.println("jwt Token"+jwtToken);
        Map<String,String> map=new HashMap<>();
        map.put("Token", jwtToken);
        map.put("message","Login Successfully!!!!");
        return  map;
    }
}
