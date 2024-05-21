package com.dordox.dordox.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dordox.dordox.Entities.ScheduleEntity;
import com.dordox.dordox.Services.ScheduleService;

@RestController
@RequestMapping("/schedules")
public class ScheduleController {
	
	@Autowired
	private ScheduleService serv;
	
	@GetMapping("/")
	public ResponseEntity<List<ScheduleEntity>> listAll() {
		return new ResponseEntity<>(serv.listAll(), HttpStatus.OK);
	}
	
	@PostMapping("/create")
	public ResponseEntity<Object> create(@Validated @RequestBody ScheduleEntity obj) {
		try {
			ScheduleEntity schedule = serv.create(obj);
			return new ResponseEntity<>(schedule, HttpStatus.CREATED);		
		}
		catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);		
		}
	}
}
