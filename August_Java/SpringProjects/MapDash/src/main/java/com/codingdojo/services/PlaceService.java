package com.codingdojo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.model.Place;
import com.codingdojo.repositories.PlaceRepository;

@Service
public class PlaceService {

	@Autowired
	PlaceRepository placeRepository;

	public List<Place> allPlaces() {
		return placeRepository.findAll();
	}

	public Place createPlace(Place place) {
		return placeRepository.save(place);
	}

	public Place findPlace(Long id) {
		Optional<Place> currentPlace = placeRepository.findById(id);
		return currentPlace.get();
	}

	public void deletePlace(Long id) {
		placeRepository.deleteById(id);
	}
}
