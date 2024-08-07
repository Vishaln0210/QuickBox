package com.quickbox.repository;

import com.quickbox.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product, String> {
    // You can add custom query methods here if needed
}
