package com.dojo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dojo.model.Song;
import com.dojo.model.User;
import com.dojo.repositories.SongRepository;



@Service
public class SongService {
	@Autowired
	SongRepository songRepository;
	
	public List<Song> allSongs(){
		return songRepository.findAll();
	}
	
	public Song createSong(Song song) {
		song.setContributions(1L);
		return songRepository.save(song);
	}
	
	public Song findSong(Long id) {
		Optional<Song> currentSong = songRepository.findById(id);
			return currentSong.get();
	}
	public void deleteSong(Long id) {
		songRepository.deleteById(id);
	}
	
	public Song updateSong(Song song) {
		
//		Long cont = song.contributions;
		Long cont = song.getContributions();
		System.out.println("service" + cont);
		cont += 1;
		System.out.println("service" + cont);
		song.setContributions(cont);
		System.out.println(song.getContributions());
		return songRepository.save(song);
	}
	
	public User findSongCreator(Song song) {
		return song.getUser();
	}
}