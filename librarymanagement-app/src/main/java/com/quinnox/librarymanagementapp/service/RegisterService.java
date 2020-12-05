package com.quinnox.librarymanagementapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quinnox.librarymanagementapp.entity.RegistrationUser;
import com.quinnox.librarymanagementapp.repository.UserRepository;

@Service
public class RegisterService {
	@Autowired
	private UserRepository repo;
	
	public RegistrationUser saveUser(RegistrationUser user)
	{
		return repo.save(user);
	}
	
	public RegistrationUser userbyemailId(String email)
	{
		return repo.findbyemail(email);
	}
	
	public RegistrationUser userbyemailIdAndPassword(String email,String password)
	{
		return repo.findbyemailandpassword(email, password);
	}
	
	public List<RegistrationUser> findall()
	{
		return repo.findAll();
	}
	
	public Optional<RegistrationUser> findSingleUser(Integer userId)
	{
		return repo.findById(userId);
	}
	
	public boolean deleteUser(int userId)
	{
		repo.deleteById(userId);
		return true;
	}
	
	public boolean updateuser(RegistrationUser user)
	{
		repo.save(user);
		return true;
	}

}
