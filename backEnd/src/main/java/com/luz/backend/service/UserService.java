package com.luz.backend.service;

import com.luz.backend.exception.UserException;
import com.luz.backend.model.User;

public interface UserService {

    public User findUserById(Long userId) throws UserException;

    public User findUserProfileByJwt(String jwt) throws UserException;
}
