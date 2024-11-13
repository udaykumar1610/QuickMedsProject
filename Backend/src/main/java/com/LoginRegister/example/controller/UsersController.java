package com.LoginRegister.example.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.LoginRegister.example.entity.Users;
import com.LoginRegister.example.requests.LoginRequest;
import com.LoginRegister.example.service.UserService;

@RestController
public class UsersController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/addUser") 
	@CrossOrigin(origins = "http://localhost:4200")
	public Users addUser(@RequestBody Users user) {
		return userService.addUser(user);
	}
	
	@PostMapping("/loginUser")
	@CrossOrigin(origins = "http://localhost:4200")
	public Boolean loginUser(@RequestBody LoginRequest loginRequest) {
		return userService.loginUser(loginRequest);
		
   }
	
	// Get user by ID
		@GetMapping("/getUser/{name}")
		@CrossOrigin(origins = "http://localhost:4200")
		public Optional<Users> getUserById(@PathVariable String name ) {
			Optional<Users> user = userService.getUserById(name);
			if(user.isPresent()) {
				return userService.getUserById(name);
			} else {
				String msg="invalid";
				return Optional.empty();
			}
		}
		
		// Update user details
		@PutMapping("/updateUser/{name}")
		@CrossOrigin(origins = "http://localhost:4200")
		public ResponseEntity<Users> updateUser(@PathVariable String name, @RequestBody Users userDetails) {
			Users updatedUser = userService.updateUser(name, userDetails);
			if(updatedUser != null) {
				return new ResponseEntity<>(updatedUser, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		}
		
		// Delete user by ID
		@DeleteMapping("/deleteUser/{userId}")
		@CrossOrigin(origins = "http://localhost:4200")
		public ResponseEntity<String> deleteUser(@PathVariable String name) {
			Boolean isDeleted = userService.deleteUser(name);
			if(isDeleted) {
				return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
			} else {
				return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
			}
		}


}
