package com.codingdojo.safetravels.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.codingdojo.safetravels.model.Expense;
import com.codingdojo.safetravels.services.ExpenseService;

@Controller
public class SafeTravelsController {
	
	private final ExpenseService expenseService;
	
	
	
	public SafeTravelsController(ExpenseService expenseService) {
		this.expenseService = expenseService;
	}

	@GetMapping("/")
	public String index(@ModelAttribute("expense") Expense expense, 
						Model model) {
		List<Expense> expenses = expenseService.allExpenses();
		model.addAttribute("expenses", expenses);
		return "index.jsp";
	}
	
	@PostMapping("/process/expense")
	public String process(@Valid @ModelAttribute("expense") Expense expense, 
												BindingResult result) {
		if(result.hasErrors()) {
			return "index.jsp";
		}
		
		expenseService.createExpense(expense);
		return "redirect:/";
	}
	
	@RequestMapping("/expense/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model) {
        Expense expense = expenseService.findExpense(id);
        model.addAttribute("expense", expense);
        return "edit.jsp";
	}
	
	@RequestMapping(value="/expense/{id}", method=RequestMethod.PUT)
	public String update(@Valid @ModelAttribute("expense") Expense expense, BindingResult result) {
		if (result.hasErrors()) {
			return "edit.jsp";
		}else {
			expenseService.updateExpense(expense);
			return "redirect:/";
		}
	}
	
	@RequestMapping(value="/expense/{id}", method=RequestMethod.DELETE)
	public String destroy(@PathVariable("id") Long id) {
		expenseService.deleteExpense(id);
		return "redirect:/";
	}
	
	@RequestMapping("expense/{id}")
	public String detail(@PathVariable("id") Long id, Model model) {
		Expense expense = expenseService.findExpense(id);
        model.addAttribute("expense", expense);
        return "details.jsp";
	}
}
