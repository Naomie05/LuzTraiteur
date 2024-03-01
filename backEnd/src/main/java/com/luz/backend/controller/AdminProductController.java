package com.luz.backend.controller;

import com.luz.backend.exception.ProductExecption;
import com.luz.backend.model.Product;
import com.luz.backend.request.CreateProductRequest;
import com.luz.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/products")
public class AdminProductController {
    @Autowired
    private ProductService productService;
    @PostMapping("/")
    public ResponseEntity<Product> createProduct(@RequestBody CreateProductRequest req){

        Product product = productService.createProduct(req);
        return new ResponseEntity<Product>(product, HttpStatus.CREATED);
    }

    /*@DeleteMapping("/{productId}/delete")
    public ResponseEntity<ApiResponse> deleteProduct(@PathVariable Long productId) throws ProductExecption{

        productService.deleteProduct(productId);
        ApiResponse res = new ApiResponse();
        res.setMessage("Produit supprimer avec succes");
        res.setStatus(true);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }*/

    @GetMapping("/all")
    public ResponseEntity<List<Product>> findAllProduct(){

        List<Product> products = productService.getAllProducts();

        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    @PutMapping("/{productId}/update")
    public ResponseEntity<Product> updateProduct(@RequestBody Product req, @PathVariable Long productId) throws ProductExecption{

        Product product = productService.updateProduct(productId, req);

        return new ResponseEntity<Product>(product, HttpStatus.CREATED);
    }
    /*@PostMapping("/creates")
    public ResponseEntity<ApiResponse> createMultipleProduct(@RequestBody CreateProductRequest [] req){

        for (CreateProductRequest product:req){
            productService.createProduct(product);
        }
        ApiResponse res = new ApiResponse();
        res.setMessage("Produits creer avec succes");
        res.setStatus(true);

        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }*/
}
