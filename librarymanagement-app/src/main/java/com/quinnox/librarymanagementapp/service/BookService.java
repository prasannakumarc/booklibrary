package com.quinnox.librarymanagementapp.service;

import java.util.List;

import com.quinnox.librarymanagementapp.dto.BookDTO;
import com.quinnox.librarymanagementapp.entity.Book;

public interface BookService {
	 public boolean addBook(BookDTO book);
	    public List<Book> findAllBooks();
		public boolean updateBook(BookDTO book);
		public boolean deleteBook(int bookId);
		public Book getDetailsofUpdatingBook(int bookId);

}
