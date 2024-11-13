package com.LoginRegister.example.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.LoginRegister.example.entity.Users;
import com.LoginRegister.example.repository.UsersRepo;
import com.LoginRegister.example.requests.LoginRequest;

@Service
public class UserService {
	
	@Autowired 
	UsersRepo usersRepo;
	
	public Users addUser(Users user) {
		
		return usersRepo.save(user);
		
	}
	
	
//public Boolean loginUser(LoginRequest loginRequest) {
//		
//		Optional<Users> user = usersRepo.findById(loginRequest.getUserId());
//		Users user1 = user.get();
//		
//		if(user1 == null) {
//			return false;
//		}
//		
//		
//		
//		if(!user1.getPassword().equals(loginRequest.getPassword())) {
//			return false;
//		}
//		
//		return true;
//		
//		
//		
//	}
	
	
	public String loginUser(LoginRequest loginRequest) {
	    // Find the user by userId (or email, depending on your use case)
	    Optional<Users> userOptional = usersRepo.findById(loginRequest.getUserId());
	    
	    // If user doesn't exist, return null or error message
	    if (userOptional.isEmpty()) {
	        return "Invalid user credentials";
	    }

	    Users user = userOptional.get(); // Get the actual user from the Optional

	    // Validate the password
	    if (!user.getPassword().equals(loginRequest.getPassword())) {
	        return "Incorrect password";
	    }

	    // Return the user's name if login is successful
	    return user.getName(); // Return user's name as a string
	}

	public Optional<Users> getUserById(String name) {
		return usersRepo.findById(name);
	}
	
	// Update user details
	public Users updateUser(String name, Users userDetails) {
		Optional<Users> existingUser = usersRepo.findById(name);
		if(existingUser.isPresent()) {
			Users user = existingUser.get();
			// Update fields (you can add more fields as needed)
			user.setName(userDetails.getName());
			user.setPassword(userDetails.getPassword());
			// You can update more fields like email, etc.
			return usersRepo.save(user);
		}
		return null;  // User not found
	}
	
	
	// Delete user by ID
		public Boolean deleteUser(String name) {
			Optional<Users> user = usersRepo.findById(name);
			if(user.isPresent()) {
				usersRepo.deleteById(name);
				return true;  // User deleted
			}
			return false;  // User not found
		}

	

}
