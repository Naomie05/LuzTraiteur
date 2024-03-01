package com.luz.request;

import com.luz.backend.model.ProductRequirement;

import java.util.ArrayList;
import java.util.List;

public class CreateProductRequest {

    private String title;
    private String description;
    private int price;
    private int discountedPrice;
    private int dicountPercent;
    private int calories;
    private String imageUrl;
    private List<ProductRequirement> productRequirements = new ArrayList<>();
    private String topLevelCategory;
    private String secondLevelCategory;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getDiscountedPrice() {
        return discountedPrice;
    }

    public void setDiscountedPrice(int discountedPrice) {
        this.discountedPrice = discountedPrice;
    }

    public int getDicountPercent() {
        return dicountPercent;
    }

    public void setDicountPercent(int dicountPercent) {
        this.dicountPercent = dicountPercent;
    }

    public int getCalories() {
        return calories;
    }

    public void setCalories(int calories) {
        this.calories = calories;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public List<ProductRequirement> getProductRequirements() {
        return productRequirements;
    }

    public void setProductRequirements(List<ProductRequirement> productRequirements) {
        this.productRequirements = productRequirements;
    }

    public String getTopLevelCategory() {
        return topLevelCategory;
    }

    public void setTopLevelCategory(String topLevelCategory) {
        this.topLevelCategory = topLevelCategory;
    }

    public String getSecondLevelCategory() {
        return secondLevelCategory;
    }

    public void setSecondLevelCategory(String secondLevelCategory) {
        this.secondLevelCategory = secondLevelCategory;
    }
}
