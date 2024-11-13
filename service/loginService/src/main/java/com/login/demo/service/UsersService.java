package com.login.demo.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.login.demo.Model.User;
import com.login.demo.repository.UserRepository;

import java.util.HashMap;
import java.util.Map;

@Service
public class UsersService {

    @Autowired
    private UserRepository userRepository;

    // Register a new user
    public Map<String, String> registerUser(User user) {
        Map<String, String> response = new HashMap<>();

        // Check if the username already exists
        if (userRepository.findByUsername(user.getUsername()) != null) {
            response.put("message", "Username already exists!");
            return response;
        }

        // Save the user to the database
        userRepository.save(user);
        response.put("message", "User registered successfully!");
        return response;
    }

    // Authenticate user credentials for sign-in
    public Map<String, String> authenticateUser(String email, String password) {
        Map<String, String> response = new HashMap<>();

        User user = userRepository.findByEmail(email);

        // Check if user exists and password matches
        if (user == null || !user.getPassword().equals(password)) {
            response.put("message", "Invalid username or password!");
            return response;
        }
        response.put("name", user.getUsername());

        response.put("message", "User signed in successfully!");
        return response;
    }
    
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null); 
    }
}