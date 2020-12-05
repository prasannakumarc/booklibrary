package com.quinnox.librarymanagementapp.service;

import java.util.List;

import com.quinnox.librarymanagementapp.dto.UserDTO;
import com.quinnox.librarymanagementapp.entity.User;



public interface UserService {
	
	 public boolean addUser(UserDTO user);
	    public List<User> findAllUsers();
		public boolean updateUser(UserDTO user);
		public boolean deleteUser(int userId);
		
		public List<User> login(String email, String password);

}
