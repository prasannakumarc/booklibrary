package com.quinnox.librarymanagementapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quinnox.librarymanagementapp.dao.BookDAO;
import com.quinnox.librarymanagementapp.dto.BookDTO;
import com.quinnox.librarymanagementapp.entity.Book;

@Service
public class BookServiceImpl implements BookService{
	
	@Autowired
	BookDAO dao;

	@Override
	public boolean addBook(BookDTO book) {
		dao.addBook(book);
		
		return true;
	}

	@Override
	public List<Book> findAllBooks() {
		
	     return dao.findAllBooks();
	}

	@Override
	public boolean updateBook(BookDTO book) {
		return dao.updateBook(book);
	}

	@Override
	public boolean deleteBook(int bookId) {
		
		return dao.deleteBook(bookId);
	}

	@Override
	public Book getDetailsofUpdatingBook(int bookId) {
		
		return dao.getDetailsofUpdatingBook(bookId);
	}

}
