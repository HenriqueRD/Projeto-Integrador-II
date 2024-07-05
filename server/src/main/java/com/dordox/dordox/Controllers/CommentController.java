package com.dordox.dordox.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dordox.dordox.Dto.CommentInputDto;
import com.dordox.dordox.Dto.CommentOutputDto;
import com.dordox.dordox.Services.CommentService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/comments")
@CrossOrigin("http://localhost:5173/")

public class CommentController {
	
	@Autowired
	private CommentService serv;
	
	@PostMapping("/")
	public ResponseEntity<Object> create(@Validated @RequestBody CommentInputDto obj, HttpServletRequest req) {
		try {
			CommentOutputDto schedule = new  CommentOutputDto(serv.create(obj,Long.parseLong(req.getAttribute("user_id").toString())));
			return new ResponseEntity<>(schedule, HttpStatus.CREATED);		
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.UNAUTHORIZED);		
		}
		
	}
}
