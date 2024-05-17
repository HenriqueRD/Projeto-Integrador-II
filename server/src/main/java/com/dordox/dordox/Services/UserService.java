package com.dordox.dordox.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dordox.dordox.Entities.UserEntity;
import com.dordox.dordox.Repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repo;
	
	public List<UserEntity> listAll() {
		List<UserEntity> users = repo.findAll();
		return users;
	}
	
	public List<UserEntity> listByName(String name) {
		List<UserEntity> users = repo.findByNameContainingIgnoreCase(name);
		return users;
	}
	
	public UserEntity create(UserEntity obj) throws Exception {
		boolean isUser = repo.existsByEmail(obj.getEmail());
		if(isUser) {
			throw new Exception("Email já cadastrado!");
		}
		UserEntity user = repo.save(obj);
		return user;
	}
}
