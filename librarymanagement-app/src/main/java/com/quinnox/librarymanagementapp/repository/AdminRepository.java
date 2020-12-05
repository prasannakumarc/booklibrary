package com.quinnox.librarymanagementapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.quinnox.librarymanagementapp.entity.AdminLogin;

public interface AdminRepository extends JpaRepository<AdminLogin, Integer>{
	
	@Query(value = "select A from AdminLogin A where A.email=?1 and A.password=?2 ")
	public AdminLogin findByEmailandPassword(String email,String password);

}
