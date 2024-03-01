package com.luz.backend.controller;

import com.luz.backend.exception.ProductExecption;
import com.luz.backend.model.Product;
import com.luz.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {
    @Autowired
    private ProductService productService;
    @GetMapping("/products")
    public List<Product> getProducts(){

        return productService.getAllProducts();
    }

    @GetMapping("/products/id/{productId}")
    public ResponseEntity<Product> findProductByIdHandler(@PathVariable Long productId) throws ProductExecption{

        Product product = productService.findProductById(productId);

        return new ResponseEntity<Product>(product, HttpStatus.ACCEPTED);
    }

    /*@GetMapping("/products/search")
    public ResponseEntity<List<Product>> searchProductHandler(@RequestParam String q){

        List<Product> products = productService.searchProduct(q);

        return new ResponseEntity<List<Product>>(products, HttpStatus.OK);

    }*/

}
