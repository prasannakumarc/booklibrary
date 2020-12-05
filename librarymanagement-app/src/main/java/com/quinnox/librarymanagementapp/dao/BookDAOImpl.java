package com.quinnox.librarymanagementapp.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.quinnox.librarymanagementapp.dto.BookDTO;
import com.quinnox.librarymanagementapp.entity.Book;

@Repository
public class BookDAOImpl implements BookDAO{
	
	@Autowired
	EntityManager manager;

	@Override
	@Transactional
	public boolean addBook(BookDTO book) {
		
		Book book2 = new Book();
		BeanUtils.copyProperties(book, book2);
	    manager.persist(book2);
		return true;
	}

	@Override
	public List<Book> findAllBooks() {
		TypedQuery<Book> query = manager.createQuery("From Book", Book.class);
		return query.getResultList();
		
	}
	
	

	@Override
	@Transactional
	public boolean updateBook(BookDTO book) {
		
		Book book1 = manager.find(Book.class, book.getBookId());
		BeanUtils.copyProperties(book, book1);
		return true;
	}

	@Override
	@Transactional
	public boolean deleteBook(int bookId) {
		
		Book book = manager.find(Book.class, bookId);
		manager.remove(book);
		return true;
	}

	@Override
	public Book getDetailsofUpdatingBook(int bookId) {
		
		TypedQuery<Book> query = manager.createQuery("select U from Book U where U.bookId=?1",Book.class);
		
		query.setParameter(1, bookId);
		return query.getSingleResult();
	}
	

	
	

}
