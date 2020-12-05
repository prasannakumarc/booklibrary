package com.quinnox.librarymanagementapp.dao;

import java.util.List;

import com.quinnox.librarymanagementapp.dto.BookDTO;
import com.quinnox.librarymanagementapp.entity.Book;




public interface BookDAO {
	
public boolean addBook(BookDTO book);
	
	public List<Book> findAllBooks();
	
	public boolean updateBook(BookDTO book);
	
	public boolean deleteBook(int bookId);
	
	public Book getDetailsofUpdatingBook(int bookId);
	

}
