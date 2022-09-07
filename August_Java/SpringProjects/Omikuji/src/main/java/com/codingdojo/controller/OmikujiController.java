package com.codingdojo.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class OmikujiController {
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	
	

	@RequestMapping(value ="/submit", method=RequestMethod.POST)
	public String showOmikuji(
		@RequestParam(value="number") int number,
		@RequestParam(value="city") String city,
		@RequestParam(value="person") String person,
		@RequestParam(value="profession") String profession,
		@RequestParam(value="livingThing") String livingThing,
		@RequestParam(value="somethingNice") String somethingNice,
		HttpSession session) {
		
		session.setAttribute("number", number);
		session.setAttribute("city", city);
		session.setAttribute("person", person);
		session.setAttribute("profession", profession);
		session.setAttribute("livingThing", livingThing);
		session.setAttribute("somethingNice", somethingNice);
		
		
		return "redirect:/show";
	}

	@RequestMapping("/show")
	public String show() {
		return "show.jsp";
}

}