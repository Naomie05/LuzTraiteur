package com.luz.service;

import com.luz.exception.UserException;
import com.luz.model.User;

public interface UserService {

    public User findUserById(Long userId) throws UserException;

    public User findUserProfileByJwt(String jwt) throws UserException;
}
