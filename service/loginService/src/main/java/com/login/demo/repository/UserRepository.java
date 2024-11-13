package com.login.demo.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.login.demo.Model.User;



public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
    User findByUsername(String Username);
}