package com.luz.backend.service;

import com.luz.backend.exception.ProductExecption;
import com.luz.backend.model.Review;
import com.luz.backend.model.User;
import com.luz.backend.request.ReviewRequest;

import java.util.List;

public interface ReviewService {

    public Review createReview(ReviewRequest req, User user) throws ProductExecption;

    public List<Review> getAllReview(Long productId);

}
