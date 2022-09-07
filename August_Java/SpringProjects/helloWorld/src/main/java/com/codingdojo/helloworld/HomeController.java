package com.codingdojo.helloworld;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/hello")
public class HomeController {
	@RequestMapping("")
	public String index(@RequestParam(value="q", required= false)String searchQuery) {
		if(searchQuery == null) {
			return "You dare not search?";
		}
		else {
			return "Hello Wooooooooooooorld! You searched for " + searchQuery;
		}
	}
	
	  @RequestMapping("/m/{track}/{module}/{lesson}")
	    public String showLesson(@PathVariable("track") String track, @PathVariable("module") String module, @PathVariable("lesson") String lesson){
	    	return "Track: " + track + ", Module: " + module + ", Lesson: " + lesson;
	    }
	@RequestMapping("/world")
	public String world() {
		return "yup yup";
	}
}
