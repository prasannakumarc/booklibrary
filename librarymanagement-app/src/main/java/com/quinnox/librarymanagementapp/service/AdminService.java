package com.quinnox.librarymanagementapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quinnox.librarymanagementapp.entity.AdminLogin;
import com.quinnox.librarymanagementapp.repository.AdminRepository;

@Service
public class AdminService {
	
	@Autowired
	private AdminRepository repo;
	
	public AdminLogin adminEmailandPassword(String email,String password)
	{
		return repo.findByEmailandPassword(email, password);
	}

}
