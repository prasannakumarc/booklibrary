package com.quinnox.librarymanagementapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quinnox.librarymanagementapp.dao.UserDAO;
import com.quinnox.librarymanagementapp.dto.UserDTO;
import com.quinnox.librarymanagementapp.entity.User;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserDAO dao;

	@Override
	public boolean addUser(UserDTO user) {
		
		dao.addUser(user);
		return true;
	}

	@Override
	public List<User> findAllUsers() {
		
		return dao.findAllUsers();
	}

	@Override
	public boolean updateUser(UserDTO user) {
		
		return dao.updateUser(user);
	}

	@Override
	public boolean deleteUser(int userId) {
		
		return dao.deleteUser(userId);
	}

	@Override
	public List<User> login(String email, String password) {
		
		return dao.login(email, password);
	}

}
