package com.quinnox.librarymanagementapp.dao;

import java.util.List;

import javax.persistence.EntityManager;

import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import com.quinnox.librarymanagementapp.dto.UserDTO;

import com.quinnox.librarymanagementapp.entity.User;

@Repository
public class UserDAOImpl implements UserDAO{
	
	@Autowired
	EntityManager manager;

	@Override
	@Transactional
	public boolean addUser(UserDTO user) {
		
		User user2 = new User();
		BeanUtils.copyProperties(user, user2);
		manager.persist(user2);
		return true;
	}

	@Override
	public List<User> findAllUsers() {
		
		TypedQuery<User> query =manager.createQuery("From User", User.class);
		return query.getResultList();
	}

	@Override
	@Transactional
	public boolean updateUser(UserDTO user) {
		
		User user2 = manager.find(User.class, user.getUserId());
		BeanUtils.copyProperties(user, user2);
		return true;
	}

	@Override
	@Transactional
	public boolean deleteUser(int userId) {
		
		User user = manager.find(User.class, userId);
		manager.remove(user);
		return true;
	}

	@Override
	public List<User> login(String email, String password) {
		
		TypedQuery<User> query = manager.createQuery("select U from User U where U.email=?1 and U.password=?2",User.class);
		
		query.setParameter(1, email);
		query.setParameter(2, password);
		
		return query.getResultList();
	}

//	@Override
//	public User fetchUserByEmail(String email) {
//		Query query = manager.createQuery("select U from User where U.email=?1");
//		
//		query.setParameter(1, email);
//		return (User) query.getSingleResult();
//	}

	


}
