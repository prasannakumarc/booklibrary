package com.quinnox.librarymanagementapp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name="book")
public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "bookId")
	private int bookId;
	
	@Column(name = "bookName")
	private String bookName;
	
	@Column(name="bookAuther")
	private String bookAuther;
	
	@Column(name="bookTitle")
	private String bookTitle;
	
	@Column(name="bookCategory")
	private String bookCategory;
	
	@Column(name="bookPublisherName")
	private String bookPublisherName;
	
	@Column(name="bookStatus")
	private String bookStatus;

	public int getBookId() {
		return bookId;
	}

	public void setBookId(int bookId) {
		this.bookId = bookId;
	}

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public String getBookAuther() {
		return bookAuther;
	}

	public void setBookAuther(String bookAuther) {
		this.bookAuther = bookAuther;
	}

	public String getBookTitle() {
		return bookTitle;
	}

	public void setBookTitle(String bookTitle) {
		this.bookTitle = bookTitle;
	}

	public String getBookCategory() {
		return bookCategory;
	}

	public void setBookCategory(String bookCategory) {
		this.bookCategory = bookCategory;
	}

	public String getBookPublisherName() {
		return bookPublisherName;
	}

	public void setBookPublisherName(String bookPublisherName) {
		this.bookPublisherName = bookPublisherName;
	}

	public String getBookStatus() {
		return bookStatus;
	}

	public void setBookStatus(String bookStatus) {
		this.bookStatus = bookStatus;
	}
	
	
	
	


	
}
