package com.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.model.*;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class FlightsController {
	@Autowired
	FlightsDAO flightsDAO;
	@PostMapping("/addflights")
	public Flights addContact(@RequestBody Flights c) {
		return flightsDAO.save(c);
		
	}
	@DeleteMapping("/deleteflights/{id}")
	public String deleteForm(@PathVariable int id) {
		flightsDAO.deleteById(id);
		return "form cancelled.";
	}
	@PatchMapping("/modifyflights")
	public String modifyFlight(@RequestBody Flights f) {
		flightsDAO.save(f);
		return "form modified";
	}
	@GetMapping("/flightslist")
	public Iterable<Flights> getFlight() {
		return  flightsDAO.findAll();
	}
	
	

	

}
