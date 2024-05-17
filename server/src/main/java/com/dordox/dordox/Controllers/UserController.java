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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dordox.dordox.Dto.LoginUserDto;
import com.dordox.dordox.Entities.UserEntity;
import com.dordox.dordox.Services.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserService serv;
	
	@GetMapping("/")
	public ResponseEntity<List<UserEntity>> listAll() {
		return new ResponseEntity<>(serv.listAll(), HttpStatus.OK);
	}
	
	@GetMapping("/find")
	public ResponseEntity<List<UserEntity>> listByName(@RequestParam(name = "value") String name) {
		return new ResponseEntity<>(serv.listByName(name), HttpStatus.OK);
	}
	
	@PostMapping("/create")
	public ResponseEntity<Object> create(@Validated @RequestBody UserEntity obj) throws Exception {
		try {
			UserEntity user = serv.create(obj);
			return new ResponseEntity<>(user, HttpStatus.CREATED);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}			
	}
	
	@PostMapping("/auth")
	public ResponseEntity<Object> auth(@Validated @RequestBody LoginUserDto obj) throws Exception {
		try {
			String token = serv.auth(obj);
			return new ResponseEntity<>(token, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.UNAUTHORIZED);
		}		
		
	}
}
