package com.dordox.dordox.Services;

import java.time.Duration;
import java.time.Instant;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.dordox.dordox.Dto.LoginUserDto;
import com.dordox.dordox.Entities.UserEntity;
import com.dordox.dordox.Exceptions.EmailAlreadyRegisteredException;
import com.dordox.dordox.Exceptions.InvalidCredentialsException;
import com.dordox.dordox.Exceptions.UserNotFoundException;
import com.dordox.dordox.Repositories.UserRepository;

import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repo;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public List<UserEntity> listAll() {
		List<UserEntity> users = repo.findAll();
		return users;
	}
	
	public List<UserEntity> listByName(String name) {
		List<UserEntity> users = repo.findByNameContainingIgnoreCase(name);
		return users;
	}
	
	@Transactional
	public UserEntity create(UserEntity obj) throws Exception {
		boolean isUser = repo.existsByEmail(obj.getEmail());
		if(isUser) {
			throw new EmailAlreadyRegisteredException("Email já cadastrado!");
		}
		String password = passwordEncoder.encode(obj.getPassword());
		obj.setPassword(password);
		UserEntity user = repo.save(obj);
		return user;
	}
	
	public String auth(LoginUserDto obj) throws InvalidCredentialsException, UserNotFoundException {
		UserEntity user = repo.findByEmail(obj.getEmail()).orElseThrow(() -> {
			throw new UserNotFoundException("Email ou Senha incorreta!");
		});
		if(passwordEncoder.matches(obj.getPassword(), user.getPassword())) {
			Algorithm alg = Algorithm.HMAC256("12345");
			String token = JWT.create().withIssuer("Dordox").withExpiresAt(Instant.now().plus(Duration.ofHours(1))).withSubject(user.getId().toString()).sign(alg);
			return token;
		}
		else {
			throw new InvalidCredentialsException("Email ou Senha incorreta!");
		}
	}
}
