
package com.quinnox.librarymanagementapp.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quinnox.librarymanagementapp.dto.ResponceMessage;
import com.quinnox.librarymanagementapp.dto.UserDTO;
import com.quinnox.librarymanagementapp.entity.User;
import com.quinnox.librarymanagementapp.service.UserService;

import java.util.List;



@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class UserController {
	
	@Autowired
	UserService service;
	
	@PostMapping("/user")
	public String addUser(@RequestBody UserDTO user) {
		service.addUser(user);
		return "user added successfully";
		
	}
	
	
	@GetMapping("/users")
	public List<User> findAllUsers() {
		return service.findAllUsers();
	}
	
	@PutMapping("/user")
	public String updateUser(@RequestBody UserDTO user)
	{
		service.updateUser(user);
		return "user updated successfully";
	}
	
	@DeleteMapping("/user")
	public String deleteUser(int userId) {
		service.deleteUser(userId);
		return "User Deleted Successfully";
	}
	
	@GetMapping("/login/{email}/{password}")
    public ResponceMessage login(@PathVariable("email") String email,@PathVariable("password") String password)
    {
    	ResponceMessage responceMessage = new ResponceMessage();
    	List<User> user = service.login(email, password);
    	if(user !=null)
    	{
    		responceMessage.setStatusCode(200);
    		responceMessage.setMessage("success");
    		responceMessage.setDescription("login successfull");
    		responceMessage.setUserResponse(user);
    	}
    	else
    	{
    		responceMessage.setStatusCode(400);
    		responceMessage.setMessage("failed");
    		responceMessage.setDescription("login failed");
    	}
    	
    	return responceMessage;
    	
    	
    }

}
