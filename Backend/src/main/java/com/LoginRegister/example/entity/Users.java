package com.LoginRegister.example.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Users {
	
	@Id
	private String email;
	
	private String name;
	
	private long mobileNumber;  
	
	private String password;
	
	public Users() {
		
	}

	public Users(String email, String name, long mobileNumber, String password) {
		super();
		this.email = email;
		this.name = name;
		this.mobileNumber = mobileNumber;
		this.password = password;
	}

	
	public long getMobileNumber() {
		return mobileNumber;
	}

	
	public void setMobileNumber(long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
