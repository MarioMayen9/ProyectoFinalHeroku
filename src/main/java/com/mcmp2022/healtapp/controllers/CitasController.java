package com.mcmp2022.healtapp.controllers;

import java.util.List;
import java.util.Optional;
import java.util.function.Supplier;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mcmp2022.healtapp.models.Citas;
import com.mcmp2022.healtapp.repository.CitasRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/citas")

public class CitasController {

	@Autowired
	private CitasRepository citasRepository;
	@GetMapping
	public List<Citas> getAllCitas(){
		return citasRepository.findAll();
		
	}
	
	@PostMapping
	public Citas CreateCitas(@RequestBody Citas citas){
		return citasRepository.save(citas);
	}
	
	@GetMapping("{id}")
	public Optional<Citas> getCitasById(@PathVariable long id){
		 return citasRepository.findById(id);
				}
	
	
	@DeleteMapping("{id}")
	public void deleteCitaById(@PathVariable long id){
		  citasRepository.deleteById(id);
		 
				}

}
