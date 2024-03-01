package com.luz.backend.controller;

import com.luz.backend.exception.ProductExecption;
import com.luz.backend.exception.UserException;
import com.luz.backend.model.Cart;
import com.luz.backend.model.User;
import com.luz.backend.request.AddItemRequest;
import com.luz.backend.service.CartService;
import com.luz.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jmx.export.annotation.ManagedOperation;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private CartService cartService;

    @Autowired
    private UserService userService;

    @GetMapping("/")
    //@ManagedOperation(description = "find cart by user id")
    public ResponseEntity<Cart> findUserCart(@RequestHeader("Authorization") String jwt) throws UserException{
        User user = userService.findUserProfileByJwt(jwt);
        Cart cart = cartService.findUserCart(user.getId());

        return new ResponseEntity<Cart>(cart, HttpStatus.OK);
    }
   /* @PutMapping("/add")
    //@ManagedOperation(description = "add item to cart")
    public ResponseEntity<ApiResponse> addItemToCart(@RequestBody AddItemRequest req, @RequestHeader("Authorization") String jwt) throws UserException, ProductExecption{

        User user = userService.findUserProfileByJwt(jwt);

        cartService.addCartItem(user.getId(), req);

        ApiResponse res = new ApiResponse();
        res.setMessage("Article ajouté au Panier");
        res.setStatus(true);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }*/
}
