package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class UserController {
	@RequestMapping("/")
	public String displayLogin() {
		return "index.jsp";
		
	}
	
	@RequestMapping(value="/process/login", method =RequestMethod.POST)
	public String processLogin(
		@RequestParam(value="email") String email,
		@RequestParam(value="password") String password) {
		return "redirect: /";
	}
}
 
