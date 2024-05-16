package com.dordox.dordox.Controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dordox.dordox.Entities.UserEntity;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@PostMapping("/")
	public ResponseEntity<UserEntity> create(@RequestBody UserEntity obj) {
		return new ResponseEntity<>(obj, HttpStatus.CREATED);
	}
}
