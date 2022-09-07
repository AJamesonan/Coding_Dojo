package com.codingdojo.mvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class BookController {
	@GetMapping("/")
	public String index() {
		return "index.jsp";
	}
}
