package com.quinnox.librarymanagementapp.dto;

import java.util.List;

import com.quinnox.librarymanagementapp.entity.User;

public class ResponceMessage {
	private int statusCode;
	private String message;
	private String description;
	private List<User> userResponse;
	
	public List<User> getUserResponse() {
		return userResponse;
	}
	public void setUserResponse(List<User> userResponse) {
		this.userResponse = userResponse;
	}
	public int getStatusCode() {
		return statusCode;
	}
	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	

}
