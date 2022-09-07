package com.codingdojo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.model.Place;



@Repository
public interface PlaceRepository extends CrudRepository<Place , Long> {
	List<Place> findAll();
	
	Optional<Place> findById(Long id);
	
	Place save(Place book);
	
	void deleteById(Long id);
}