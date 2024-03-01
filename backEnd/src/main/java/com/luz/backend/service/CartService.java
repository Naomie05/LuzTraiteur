package com.luz.backend.service;

import com.luz.backend.exception.ProductExecption;
import com.luz.backend.model.Cart;
import com.luz.backend.model.User;
import com.luz.backend.request.AddItemRequest;

public interface CartService {

    public Cart createCart(User user);

    public String addCartItem(Long userId, AddItemRequest req) throws ProductExecption;

    public Cart findUserCart(Long userId);
}
