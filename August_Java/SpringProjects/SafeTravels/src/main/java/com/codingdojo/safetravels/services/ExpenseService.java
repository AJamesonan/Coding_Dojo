package com.codingdojo.safetravels.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.safetravels.model.Expense;
import com.codingdojo.safetravels.repositories.ExpenseRepository;

@Service
public class ExpenseService {
	private final ExpenseRepository expenseRepository;
	
	public ExpenseService(ExpenseRepository expenseRepository) {
		this.expenseRepository = expenseRepository;
	}

	public Expense findExpense(Long id) {
		Optional<Expense> expenses = expenseRepository.findById(id);
		if(expenses.isEmpty()) {
			return null;
		}
		else {
			return expenses.get();
		}
	}
	public Expense createExpense(Expense expense) {
		return expenseRepository.save(expense);
	}
	
	public List<Expense> allExpenses(){
		return expenseRepository.findAll();
	}
	
	public Expense updateExpense(Expense expense) {
		return expenseRepository.save(expense);
	}
	
	public void deleteExpense(Long id) {
		expenseRepository.deleteById(id);
	}
}
