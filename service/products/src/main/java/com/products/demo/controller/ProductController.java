package com.products.demo.controller;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.products.demo.Model.Product;
import com.products.demo.service.ProductService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    @Autowired
    private ProductService productService;

    // Create or Update a product
    @PostMapping("/insert")
    
    public ResponseEntity<Product> createOrUpdateProduct(@RequestBody Product product) {
        try {
            Product savedProduct = productService.saveProduct(product);
            return new ResponseEntity<>(savedProduct, HttpStatus.CREATED); 
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST); 
        }
    }

    // Get all products
    @GetMapping("/get")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); 
        }
        return new ResponseEntity<>(products, HttpStatus.OK); 
    }

    // Get product by ID
    @GetMapping("/get/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") int pid) {
        Optional<Product> product = productService.getProductById(pid);
        return product.map(p -> new ResponseEntity<>(p, HttpStatus.OK)) 
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Delete product by ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable("id") int pid) {
        if (productService.getProductById(pid).isPresent()) {
            productService.deleteProduct(pid);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); 
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
        }
    }

    // Update product by ID
    @PutMapping("/update/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable("id") int pid, @RequestBody Product productDetails) {
        Product updatedProduct = productService.updateProduct(pid, productDetails);
        if (updatedProduct != null) {
            return new ResponseEntity<>(updatedProduct, HttpStatus.OK); 
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
        }
    }
}
