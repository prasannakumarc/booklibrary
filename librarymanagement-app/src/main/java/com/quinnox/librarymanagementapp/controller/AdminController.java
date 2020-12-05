package com.quinnox.librarymanagementapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quinnox.librarymanagementapp.entity.AdminLogin;
import com.quinnox.librarymanagementapp.service.AdminService;

@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class AdminController {
	
	@Autowired
	public AdminService service;
	
	@PostMapping("/adminlogin")
	public AdminLogin adminLogin(@RequestBody AdminLogin login) throws Exception
	{
		String tempEmail=login.getEmail();
		String tempPass= login.getPassword();
		AdminLogin adminObj=null;
		if(tempEmail!=null && tempPass!=null)
		{
			adminObj = service.adminEmailandPassword(tempEmail, tempPass);
		}
		if(adminObj == null)
		{
			throw new Exception("bad credentials");
		}
		return adminObj;
	}

}
