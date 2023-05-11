package com.foody.authservices.service;

import com.foody.authservices.domain.User;

import java.util.Map;

public interface IGenerateToken {
    public Map<String,String>getToken(User user);
}
