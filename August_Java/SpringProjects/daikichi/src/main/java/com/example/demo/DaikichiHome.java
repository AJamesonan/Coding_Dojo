package com.example.demo;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Daikichi")
public class DaikichiHome {
	@RequestMapping("")
	public String index() {
		return "Welcome!";
	}
	
	@RequestMapping("/today")
	public String today() {
		return "Today you will find luck in your endeavors!";
	}
	
	@RequestMapping("/tomorrow")
	public String tomorrow() {
		return "Tomorrow, an opportunity will arise!";
	}
	
	@RequestMapping("/m/travel/{city}")
    public String showcity(@PathVariable("city") String city){
    	return "Congratulations! You will soon travel to, "+ city + "!";
	}
	
	@RequestMapping("/m/lotto/{number}")
    public String showlotto(@PathVariable("number") int number){
		if(number%2 == 0 ) {
			return "You will take a grand journey in the near future, but be weary of tempting offers";
		}
		else {
    	return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends.";
		}
	}
}
