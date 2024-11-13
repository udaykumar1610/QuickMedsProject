package com.login.demo.controller;



import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.login.demo.Model.User;
import com.login.demo.service.UsersService;

import java.util.Map;

@RestController
@RequestMapping("demoproject/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UsersService userService;

    // Sign-up endpoint
    @PostMapping("/signup")
    public ResponseEntity<Map<String, String>> signUp(@RequestBody User user) {
        Map<String, String> response = userService.registerUser(user);

        if (response.get("message").equals("Username already exists!")) {
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    // Sign-in endpoint
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/signin")
    public ResponseEntity<Map<String, String>> signIn(@RequestBody User user) {
        Map<String, String> response = userService.authenticateUser(user.getEmail(), user.getPassword());

        if (response.get("message").equals("Invalid username or password!")) {
            return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
        }

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        if (user == null) {
            return ResponseEntity.notFound().build(); 
        }
        return ResponseEntity.ok(user); 
    }
//    @GetMapping("/current")
//    public ResponseEntity<String> getCurrentUser() {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        String username = authentication.getUsername();  // Get the logged-in username
//        return ResponseEntity.ok(username);  // Return the username
//    }
    
}