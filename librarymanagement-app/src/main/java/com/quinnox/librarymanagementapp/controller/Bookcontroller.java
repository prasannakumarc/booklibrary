
package com.quinnox.librarymanagementapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quinnox.librarymanagementapp.dto.BookDTO;
import com.quinnox.librarymanagementapp.entity.Book;
import com.quinnox.librarymanagementapp.service.BookService;



@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class Bookcontroller {
	
	@Autowired
	private BookService service;
	
	
	@PostMapping("/book")
	public String addProduct(@RequestBody BookDTO book) {
		
		service.addBook(book);
		return "book added successfull";
	}
	
	@GetMapping("/books")
	public List<Book> findAllBooks() {
		return service.findAllBooks();
	}
	
	@GetMapping("/books/{bookId}")
	public Book getBookId(@PathVariable(value="bookId") int bookId)
	{
		 return service.getDetailsofUpdatingBook(bookId);
		
	}

	@PutMapping("/book/{bookId}")
	public String updateBook(@PathVariable(value = "bookId")int bookId,@RequestBody BookDTO book) {
		service.updateBook(book);
		return "Book Updated Successfully";
	}

	@DeleteMapping("/book/{bookId}")
	public String deleteBook(@PathVariable(value="bookId") int bookId) {
		service.deleteBook(bookId);
		return "Book Deleted Successfully";
	}
	
	
}
