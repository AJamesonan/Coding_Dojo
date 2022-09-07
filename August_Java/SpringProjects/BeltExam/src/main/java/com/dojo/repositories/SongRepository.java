package com.dojo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.dojo.model.Song;


@Repository
public interface SongRepository extends CrudRepository<Song , Long> {
	List<Song> findAll();
	
	Optional<Song> findById(Long id);
	
	Song save(Song song);
	
	void deleteById(Long id);
}