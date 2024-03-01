package com.luz.backend.repository;

import com.luz.backend.model.Cart;
import com.luz.backend.model.CartItem;
import com.luz.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    @Query("SELECT ci FROM  CartItem ci WHERE ci.cart=:cart AND ci.product=:product AND ci.requirement=:requirement AND  ci.userId=:userId")
    public CartItem isCartItemExist(@Param("cart") Cart cart, @Param("product")Product product, @Param("requirement") String requirement, @Param("userId") Long userId);
}
