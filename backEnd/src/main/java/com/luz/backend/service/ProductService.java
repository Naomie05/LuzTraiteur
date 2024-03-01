package com.luz.backend.service;

import com.luz.backend.exception.ProductExecption;
import com.luz.backend.model.Product;
import com.luz.backend.request.CreateProductRequest;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProductService {

    public Product createProduct(CreateProductRequest req);

    public String deleteProduct(Long productId) throws ProductExecption;

    public Product updateProduct(Long productId, Product req) throws ProductExecption;

    public Product findProductById(Long id) throws ProductExecption;

    public List<Product> findProductByCategory(String category);

    public List<Product> getAllProducts();
}
