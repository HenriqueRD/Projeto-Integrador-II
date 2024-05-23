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

import com.dordox.dordox.Dto.ScheduleDto;
import com.dordox.dordox.Services.ScheduleService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/schedules")
public class ScheduleController {
	
	@Autowired
	private ScheduleService serv;
	
	@GetMapping("/")
	public ResponseEntity<List<ScheduleDto>> listAll() {
		List<ScheduleDto> list = serv.listAll().stream().map(x -> new ScheduleDto(x)).toList();
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@PostMapping("/create")
	public ResponseEntity<Object> create(@Validated @RequestBody ScheduleDto obj, HttpServletRequest req) {
		try {
			ScheduleDto schedule = new ScheduleDto(serv.create(obj,Long.parseLong(req.getAttribute("user_id").toString())));
			return new ResponseEntity<>(schedule, HttpStatus.CREATED);		
		} catch (Exception e) {
			System.err.println(e.getMessage());
			return new ResponseEntity<>("Erro ao criar!", HttpStatus.UNAUTHORIZED);		
		}
		
	}
}
