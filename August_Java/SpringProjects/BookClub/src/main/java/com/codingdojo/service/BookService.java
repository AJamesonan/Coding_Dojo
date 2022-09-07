package com.codingdojo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.model.Book;
import com.codingdojo.repositories.BookRepository;

@Service
public class BookService {
	@Autowired
	BookRepository bookRepository;
	
	public List<Book> allBooks(){
		return bookRepository.findAll();
	}
	
	public Book createBook(Book book) {
		return bookRepository.save(book);
	}
	
	public Book findBook(Long id) {
		Optional<Book> currentBook = bookRepository.findById(id);
			return currentBook.get();
	}
	public void deleteBook(Long id) {
		bookRepository.deleteById(id);
	}
}
