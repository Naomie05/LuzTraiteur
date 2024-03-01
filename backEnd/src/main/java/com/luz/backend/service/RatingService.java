package com.luz.backend.service;

import com.luz.backend.exception.ProductExecption;
import com.luz.backend.model.Rating;
import com.luz.backend.model.User;
import com.luz.backend.request.RatingRequest;
import org.springframework.stereotype.Service;

import java.util.List;

public interface RatingService {

    public Rating createRating(RatingRequest req, User user) throws ProductExecption;

    public List<Rating> getProductsRating(Long productId);
}
