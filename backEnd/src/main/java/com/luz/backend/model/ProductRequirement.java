package com.luz.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Product_Requirement")
public class ProductRequirement {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;
    @Column(name = "requirement_name")
    private String requirementName;

    public ProductRequirement() {
    }

    public ProductRequirement(Long id, Product product, String requirementName) {
        this.id = id;
        this.product = product;
        this.requirementName= requirementName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public String getRequirementName() {
        return requirementName;
    }

    public void setRequirementName(String requirementName) {
        this.requirementName = requirementName;
    }
}
