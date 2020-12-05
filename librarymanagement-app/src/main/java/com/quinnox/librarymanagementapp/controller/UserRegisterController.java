package com.quinnox.librarymanagementapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quinnox.librarymanagementapp.entity.RegistrationUser;
import com.quinnox.librarymanagementapp.service.RegisterService;

@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class UserRegisterController {
	
	@Autowired
	private RegisterService service;
	
	
	@PostMapping("/addresgisteruser")
	public RegistrationUser addUser(@RequestBody RegistrationUser user) throws Exception 
	{

		String tempEmail = user.getEmail();
		if (tempEmail != null && !"".equals(tempEmail)) {
			RegistrationUser userobj = service.userbyemailId(tempEmail);
			if (userobj != null) {
				throw new Exception(" user with " + tempEmail + " already exists");
			}
		}
		RegistrationUser userObj=null;
		 userObj = service.saveUser(user);
		return userObj;
	}
	
	@PostMapping("/userlogin")
	public RegistrationUser loginUser(@RequestBody RegistrationUser user) throws Exception
	{
		String tempEmail=user.getEmail();
		String temPass= user.getPassword();
		RegistrationUser userObj=null;
		
		if(tempEmail!=null && temPass!=null)
		{
			userObj = service.userbyemailIdAndPassword(tempEmail, temPass);
		}
		
		if(userObj == null)
		{
			throw new Exception("bad credentials");
		}
		
		return userObj;
	}
	
	@GetMapping("/getRegisterusers")
	public List<RegistrationUser> getallUsers()
	{
		return service.findall();
	}
	
	@GetMapping("/getRegisterusers/{userId}")
	public Optional<RegistrationUser> findsinglerecord(@PathVariable("userId") Integer userId)
	{
	   return service.findSingleUser(userId);	
	}
	
	@DeleteMapping("/getRegisterusers/{userId}")
	public String deleteRecord(@PathVariable("userId") int userId)
	{
		service.deleteUser(userId);
		return "Record deleted";
	}
	
	@PutMapping("/getRegisterusers/{userId}")
	public String updateRecord(@PathVariable("userId") int userId,@RequestBody RegistrationUser user)
	{
		service.updateuser(user);
		return "record updated successfully";
	}

}
