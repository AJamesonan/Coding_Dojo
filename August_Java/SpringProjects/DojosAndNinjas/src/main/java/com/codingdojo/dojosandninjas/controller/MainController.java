package com.codingdojo.dojosandninjas.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.dojosandninjas.models.Dojo;
import com.codingdojo.dojosandninjas.models.Ninja;
import com.codingdojo.dojosandninjas.services.DojoService;
import com.codingdojo.dojosandninjas.services.NinjaService;

@Controller
public class MainController {
	@Autowired
	DojoService dojoService;
	
	@Autowired
	NinjaService ninjaService;
	
	@GetMapping("/")
	public String index(Model model,Dojo dojo) {
		List<Dojo> allDojos = this.dojoService.findAllDojos();
		model.addAttribute("dojos", allDojos);
		return "index.jsp";
	}
	
	@PostMapping("/new/dojo")
		public String newDojo(@Valid @ModelAttribute("dojo")Dojo dojo, BindingResult result) {
			dojoService.createDojo(dojo);
			return "redirect:/";
	}
	
	@GetMapping("/ninjas/new")
	public String newNinja(Model model, Ninja ninja) {
		List<Dojo> allDojos = this.dojoService.findAllDojos();
		model.addAttribute("dojos", allDojos);
		return "newNinja.jsp";
	}
	
	@PostMapping("/create/ninja")
	public String createNinja(@Valid @ModelAttribute("ninja")Ninja ninja, BindingResult result, Model model) {
		if (result.hasErrors()) {
			System.out.println(result.getFieldErrors());
			List<Dojo> allDojos = this.dojoService.findAllDojos();
			model.addAttribute("dojos", allDojos);
			return "newNinja.jsp";
		}
		ninjaService.createNinja(ninja);
		return "redirect:/ninjas/new";
	}
	
	@GetMapping("/dojo/{id}/roster")
	public String dojoRoster(@PathVariable("id") Long id, Model model, Dojo dojo) {
		Dojo currentDojo = this.dojoService.findDojo(id);
		List<Ninja> ninjas = currentDojo.getNinjas();
		model.addAttribute("dojo", currentDojo);
		model.addAttribute("ninjas", ninjas);
		return "dojoRoster.jsp";
	}
}
