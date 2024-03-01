package com.luz.backend.service;

import com.luz.backend.exception.ProductExecption;
import com.luz.backend.model.Category;
import com.luz.backend.model.Product;
import com.luz.backend.model.ProductRequirement;
import com.luz.backend.repository.CategoryRepository;
import com.luz.backend.repository.ProductRepository;
import com.luz.backend.request.CreateProductRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImplementation implements ProductService{

    private ProductRepository productRepository;
    private UserService userService;
    private CategoryRepository categoryRepository;

    public ProductServiceImplementation(ProductRepository productRepository, UserService userService, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.userService = userService;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Product createProduct(CreateProductRequest req) {

        Category topLevel = categoryRepository.findByName(req.getTopLevelCategory());

        if (topLevel == null){
            Category topLevelCategory = new Category();
            topLevelCategory.setName(req.getTopLevelCategory());
            topLevelCategory.setLevel(1);

            topLevel = categoryRepository.save(topLevelCategory);
        }
        Category secondLevel = categoryRepository.findByNameAndParent(req.getSecondLevelCategory(), topLevel.getName());

        if (secondLevel == null){
            Category secondLevelCategory = new Category();
            secondLevelCategory.setName(req.getSecondLevelCategory());
            secondLevelCategory.setParentCategory(topLevel);
            secondLevelCategory.setLevel(2);

            secondLevel = categoryRepository.save(secondLevelCategory);
        }

        Product product = new Product();
        product.setTitle(req.getTitle());
        product.setCalories(req.getCalories());
        product.setDescription(req.getDescription());
        product.setImageUrl(req.getImageUrl());
        product.setProductRequirements(req.getProductRequirements());
        product.setPrice(req.getPrice());
        product.setCategory(secondLevel);
        product.setCreatedAt(LocalDateTime.now());

        Product savedProduct = productRepository.save(product);

        return savedProduct;
    }

    @Override
    public String deleteProduct(Long productId) throws ProductExecption {

        Product product = findProductById(productId);
        product.getProductRequirements().clear();
        productRepository.delete(product);

        return "Produit Supprimé avec Succès!";
    }

    @Override
    public Product updateProduct(Long productId, Product req) throws ProductExecption {

        Product product = findProductById(productId);

        return null;
    }

    @Override
    public Product findProductById(Long id) throws ProductExecption {

        Optional<Product> opt =  productRepository.findById(id);

        if (opt.isPresent()){
            return opt.get();
        }
        throw new ProductExecption("Produit non trouvé avec le numéro d'identification - " + id);
    }

    @Override
    public List<Product> findProductByCategory(String category) {
        return productRepository.findByCategoryName(category);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    /*
    @Override
    public Page<Product> getAllProduct(String category, List<String> productRequirements, String stock, Integer pageNumber, Integer pageSize) {

        Pageable pageable = PageRequest.of(pageNumber, pageSize);

        List<Product> products = productRepository.fi
        return null;
    }*/
}
