package com.codingdojo.controller;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codingdojo.model.Book;
import com.codingdojo.model.LoginUser;
import com.codingdojo.model.User;
import com.codingdojo.service.BookService;
import com.codingdojo.service.UserService;



@Controller
public class MainController {
	
	// Add once service is implemented:
     @Autowired
     private UserService userService;
     
     @Autowired BookService bookService;
    
    @GetMapping("/")
    public String index(Model model) {
    
        // Bind empty User and LoginUser objects to the JSP
        // to capture the form input
        model.addAttribute("newUser", new User());
        model.addAttribute("newLogin", new LoginUser());
        return "login.jsp";
    	
 
    }
    
    @PostMapping("/register")
    public String register(@Valid @ModelAttribute("newUser") User newUser, 
            BindingResult result, Model model, HttpSession session) {
    	
        User createdUser = userService.registerUser(newUser, result);
        if(result.hasErrors()) {
        	model.addAttribute("newLogin", new LoginUser());
            return "login.jsp";
        }

        // No errors! 
        //Store their ID from the DB in session, 
        // in other words, log them in.
        session.setAttribute("firstName", createdUser.getUserName() );
        session.setAttribute("userId", createdUser.getId() );
        session.setAttribute("email", createdUser.getEmail());
        return "redirect:/books";
    }
    
    @PostMapping("/login")
    public String login(@ModelAttribute("newUser")User newUser,
    					@Valid @ModelAttribute("newLogin") LoginUser newLogin, 
    					BindingResult result, Model model, HttpSession session) {
    	
    	User user = userService.login(newLogin, result);
    	if(result.hasErrors()) {
    		model.addAttribute("newUser", new User());
            return "login.jsp";
        }
    
    
        // No errors! 
        // Store their ID from the DB in session, 
        // in other words, log them in.
        session.setAttribute("firstName", user.getUserName() );
        session.setAttribute("userId", user.getId() );
        session.setAttribute("email", user.getEmail());
        return "redirect:/books";
    }
    
    @RequestMapping("/books")
    public String win(Model model, User user ,HttpSession session ) {
    	if(userService.validateSession(session)) {
    		String userEmail = (String) session.getAttribute("email");
    		User currentUser = this.userService.findUser(userEmail);
    		List<Book> allBooks = this.bookService.allBooks();
    		model.addAttribute("user", currentUser);
    		model.addAttribute("books", allBooks);
    		return "index.jsp";
    	}
    	return "redirect:/";
    }
    
    @RequestMapping("/add/book")
    public String addBook(HttpSession session, Model model) {
    	if(userService.validateSession(session)) {
    		model.addAttribute("book", new Book());
    		return "addBook.jsp";
    	}
    	else {
    		return "redirect:/";
    	}
    }
    
    @PostMapping("/process/new/book")
    public String createBook(@Valid @ModelAttribute("book") Book book, BindingResult result, HttpSession session) {
    	if (result.hasErrors()) {
    		System.out.println(result.getFieldErrors());
    		return "addBook.jsp";
    	}
    	else {
//    		book.getUser().add(session.getAttribute("userId"));
    		bookService.createBook(book);
    		return "redirect:/books";
    	}
    }
    
    @GetMapping("/{id}/details")
    public String bookDetail(@PathVariable("id") Long id, Model model,Book book, HttpSession session ) {
    	if(userService.validateSession(session)) {
    		Book currentBook = bookService.findBook(id);
    		Object name = session.getAttribute("firstName");
    		
    		
    		model.addAttribute("name", name);
    		model.addAttribute("book", currentBook);
    		
    		return "bookDetails.jsp";
    	}
    	return "redirect:/";
    }
    
    @RequestMapping(value="/{id}/book/delete")
    public String destroy(@PathVariable("id") Long id) {
    	bookService.deleteBook(id);
    	return "redirect:/books";
    }
    
    @GetMapping("/logout")
    public String processLogout(HttpSession session) {
    	session.invalidate();
    	return "redirect:/";
    }
}