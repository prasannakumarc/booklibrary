package com.quinnox.librarymanagementapp.dao;

import java.util.List;

import com.quinnox.librarymanagementapp.dto.UserDTO;
import com.quinnox.librarymanagementapp.entity.User;

public interface UserDAO {
	
	 public boolean addUser(UserDTO user);
	    public List<User> findAllUsers();
		public boolean updateUser(UserDTO user);
		public boolean deleteUser(int userId);
//		public User fetchUserByEmail(String email);
		
		public List<User> login(String email, String password);

}
