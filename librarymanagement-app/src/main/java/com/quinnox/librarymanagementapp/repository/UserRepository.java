package com.quinnox.librarymanagementapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.quinnox.librarymanagementapp.entity.RegistrationUser;

public interface UserRepository extends JpaRepository<RegistrationUser, Integer>{
	
	@Query(value="select R from RegistrationUser R where R.email=?1")
	public RegistrationUser findbyemail(String email);
	
	@Query(value="select R from RegistrationUser R where R.email=?1 and R.password=?2")
	public RegistrationUser findbyemailandpassword(String email,String password);
	


}
