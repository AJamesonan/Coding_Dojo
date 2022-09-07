package com.codingdojo.controller;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.model.LoginUser;
import com.codingdojo.model.Place;
import com.codingdojo.model.User;
import com.codingdojo.services.PlaceService;
import com.codingdojo.services.UserService;

@Controller
public class MainController {

	// Add once service is implemented:
	@Autowired
	private UserService userService;

	@Autowired
	private PlaceService placeService;

	@GetMapping("/")
	public String index(Model model) {

		// Bind empty User and LoginUser objects to the JSP
		// to capture the form input
		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new LoginUser());
		return "login.jsp";

	}

	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model,
			HttpSession session) {

		User createdUser = userService.registerUser(newUser, result);
		if (result.hasErrors()) {
			model.addAttribute("newLogin", new LoginUser());
			return "login.jsp";
		}

		// No errors!
		// Store their ID from the DB in session,
		// in other words, log them in.
		session.setAttribute("firstName", createdUser.getUserName());
		session.setAttribute("userId", createdUser.getId());
		session.setAttribute("email", createdUser.getEmail());
		return "redirect:/dash";
	}

	@PostMapping("/login")
	public String login(@ModelAttribute("newUser") User newUser, @Valid @ModelAttribute("newLogin") LoginUser newLogin,
			BindingResult result, Model model, HttpSession session) {

		User user = userService.login(newLogin, result);
		if (result.hasErrors()) {
			model.addAttribute("newUser", new User());
			return "login.jsp";
		}

		// No errors!
		// Store their ID from the DB in session,
		// in other words, log them in.
		session.setAttribute("firstName", user.getUserName());
		session.setAttribute("userId", user.getId());
		session.setAttribute("email", user.getEmail());
		return "redirect:/dash";
	}

	@GetMapping("/dash")
	public String dash(Model model, HttpSession session) {
		if (userService.validateSession(session)) {
			String userEmail = (String) session.getAttribute("email");
			User currentUser = this.userService.findUser(userEmail);
			model.addAttribute("user", currentUser);
			return "dash.jsp";
		}
		return "redirect/";
	}

	@GetMapping("/add/location")
	public String addLocation(HttpSession session, Model model) {
		if (userService.validateSession(session)) {
			model.addAttribute("place", new Place());
			return "addLocation.jsp";
		}
		return "redirect:/";
	}

	@PostMapping("/process/new/location")
	public String processLocation(@Valid @ModelAttribute("place") Place place, BindingResult result,
			HttpSession session) {
		if (result.hasErrors()) {
			System.out.println(result.getFieldErrors());
			return "addLocation.jsp";
		} else {
			placeService.createPlace(place);
			return "redirect:/dash";
		}
	}
}