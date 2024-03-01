package com.luz.backend.controller;

import com.luz.backend.exception.ProductExecption;
import com.luz.backend.exception.UserException;
import com.luz.backend.model.Rating;
import com.luz.backend.model.User;
import com.luz.backend.request.RatingRequest;
import com.luz.backend.service.RatingService;
import com.luz.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ratings")
public class RatingController {

    @Autowired
    private UserService userService;
    @Autowired
    private RatingService ratingService;

    @PostMapping("/create")
    public ResponseEntity<Rating> createRating(@RequestBody RatingRequest request, @RequestHeader("Authorization") String jwt) throws UserException, ProductExecption{

        User user = userService.findUserProfileByJwt(jwt);

        Rating rating = ratingService.createRating(request, user);

        return new ResponseEntity<Rating>(rating, HttpStatus.CREATED);
    }


}
