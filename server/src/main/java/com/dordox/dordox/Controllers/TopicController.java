package com.dordox.dordox.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dordox.dordox.Dto.TopicInputDto;
import com.dordox.dordox.Dto.TopicOutputDto;
import com.dordox.dordox.Entities.TopicEntity;
import com.dordox.dordox.Services.TopicService;

import jakarta.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/topics")
public class TopicController {
	
	@Autowired
	private TopicService serv;
	
	@GetMapping("/")
	public ResponseEntity<List<TopicOutputDto>> listAll() {
		List<TopicOutputDto> list = serv.listAll().stream().map(x -> new TopicOutputDto(x)).toList();
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Object> find(@PathVariable Long id) {
		try {
			TopicOutputDto topic = new TopicOutputDto(serv.find(id));
			return new ResponseEntity<>(topic, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/")
	public ResponseEntity<Object> create(@RequestBody TopicInputDto obj, HttpServletRequest req) {
		try {
			TopicOutputDto topic = new TopicOutputDto(serv.create(obj, Long.parseLong(req.getAttribute("user_id").toString())));
			return new ResponseEntity<>(topic, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
}
