package com.dojo.controller;

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
import org.springframework.web.bind.annotation.RequestMethod;


import com.dojo.model.LoginUser;
import com.dojo.model.Song;
import com.dojo.model.User;
import com.dojo.services.SongService;
import com.dojo.services.UserService;


@Controller
public class MainController {
	
	// Add once service is implemented:
     @Autowired
     private UserService userService;
     
     @Autowired SongService songService;
    
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
        return "redirect:/songs";
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
        return "redirect:/songs";
    }
    
    @RequestMapping("/songs")
    public String win(Model model, User user ,HttpSession session ) {
    	if(userService.validateSession(session)) {
    		String userEmail = (String) session.getAttribute("email");
    		User currentUser = this.userService.findUser(userEmail);
    		List<Song> allSongs = this.songService.allSongs();
    		model.addAttribute("user", currentUser);
    		model.addAttribute("songs", allSongs);
    		return "songs.jsp";
    	}
    	return "redirect:/";
    }
    
    @RequestMapping("/add/song")
    public String addSong(HttpSession session, Model model) {
    	if(userService.validateSession(session)) {
    		model.addAttribute("song", new Song());
    		return "addSong.jsp";
    	}
    	else {
    		return "redirect:/";
    	}
    }
    
    @PostMapping("/process/new/song")
    public String createSong(@Valid @ModelAttribute("song") Song song, BindingResult result, HttpSession session) {
    	if (result.hasErrors()) {
    		System.out.println(result.getFieldErrors());
    		return "addSong.jsp";
    	}
    	else {
    		
    		songService.createSong(song);
    		return "redirect:/songs";
    	}
    }
    
    @GetMapping("/song/{id}")
    public String songDetail(@PathVariable("id") Long id, Model model,Song song, HttpSession session ) {
    	if(userService.validateSession(session)) {
    		Song currentSong = songService.findSong(id);
    		Object name = session.getAttribute("firstName");
    		
    		
    		model.addAttribute("name", name);
    		model.addAttribute("song", currentSong);
    		
    		return "songDetails.jsp";
    	}
    	return "redirect:/";
    }
    
    @RequestMapping("/update/song/{id}")
    public String displayUpdateSong(@PathVariable("id") Long id, HttpSession session, Model model) {
    	if(userService.validateSession(session)) {
    		Song currentSong = this.songService.findSong(id);
    		model.addAttribute("song", currentSong);
    		System.out.println(currentSong.getUser());
    		return "contribute.jsp";
    	}
    	else {
    		return "redirect:/";
    	}
    }
    
    @RequestMapping(value="/process/song/update/{id}", method=RequestMethod.PUT)
    public String updateSong(@Valid @ModelAttribute("song") Song song, BindingResult result, @PathVariable("id") Long id, HttpSession session) {
    	if (result.hasErrors()) {
    		System.out.println(result.getFieldErrors());
    		return "contribute.jsp";
    	}
    	else {
    		Song  dbsong= songService.findSong(id);
    		Long cont = dbsong.getContributions();
    		if (cont == null) {
    			cont = 1L;
    			song.setContributions(cont);
        		songService.updateSong(song);
        		return "redirect:/songs";
    		}
    		
    		System.out.println(cont);
    		song.setContributions(cont);
    		songService.updateSong(song);
    		System.out.println(cont);
    		return "redirect:/songs";
    	}
   }
    
    @RequestMapping(value="/{id}/song/delete")
    public String destroy(@PathVariable("id") Long id) {
    	songService.deleteSong(id);
    	return "redirect:/songs";
    }
    
    @GetMapping("/logout")
    public String processLogout(HttpSession session) {
    	session.invalidate();
    	return "redirect:/";
    }
    
}
