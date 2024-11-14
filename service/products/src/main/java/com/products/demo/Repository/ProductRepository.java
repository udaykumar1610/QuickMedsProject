package com.products.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.products.demo.Model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    // JpaRepository provides CRUD methods like save, findAll, findById, deleteById, etc.
}