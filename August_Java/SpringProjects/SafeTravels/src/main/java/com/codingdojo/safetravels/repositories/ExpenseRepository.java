package com.codingdojo.safetravels.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.safetravels.model.Expense;

@Repository
public interface ExpenseRepository extends CrudRepository<Expense, Long>{
	List<Expense>findAll();
	
	Optional<Expense> findById(Long id);
	
	Expense save(Expense expense);
	
	void deleteById(Long id);
}
