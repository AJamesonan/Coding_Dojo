package com.codingdojo.controller;

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

import com.codingdojo.model.LoginUser;
import com.codingdojo.model.User;
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
        return "redirect:/books";
    }
    
    @RequestMapping("/books")
    public String win(@PathVariable("id")Long id,Model model, User user,HttpSession session ) {
    	if(userService.validateSession(session)) {
    	
    		return "index.jsp";
    	}
    	return "redirect:/";
    }
    
    @GetMapping("/logout")
    public String processLogout(HttpSession session) {
    	session.invalidate();
    	return "redirect:/";
    	
    }
}