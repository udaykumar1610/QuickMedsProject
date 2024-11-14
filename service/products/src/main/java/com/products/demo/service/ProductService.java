package com.products.demo.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.products.demo.Model.Product;
import com.products.demo.Repository.ProductRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Create or Update product
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    // Get all products
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Get product by ID
    public Optional<Product> getProductById(int pid) {
        return productRepository.findById(pid);
    }

    // Delete product by ID
    public void deleteProduct(int pid) {
        productRepository.deleteById(pid);
    }

    // Update product by ID
    public Product updateProduct(int pid, Product productDetails) {
        if (productRepository.existsById(pid)) {
            productDetails.setPid(pid); 
            return productRepository.save(productDetails);
        } else {
            return null;
        }
    }
}
