package com.codingdojo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codingdojo.model.Place;
import com.codingdojo.services.PlaceService;
import com.codingdojo.services.UserService;

@RestController
@RequestMapping("/api")
public class APIController {
	
	@Autowired
	private UserService userService;

	@Autowired
	private PlaceService placeService;
	
	@GetMapping("/dash")
	public ResponseEntity<List<Place>> apiGetPlaces(){
		List<Place> listOfPlaces = placeService.allPlaces();
		return new ResponseEntity<>(listOfPlaces, HttpStatus.ACCEPTED);
	}
}
