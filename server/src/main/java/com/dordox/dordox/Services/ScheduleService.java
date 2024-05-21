package com.dordox.dordox.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dordox.dordox.Entities.ScheduleEntity;
import com.dordox.dordox.Exceptions.UserNotFoundException;
import com.dordox.dordox.Repositories.ScheduleRepository;
import com.dordox.dordox.Repositories.UserRepository;

import org.springframework.transaction.annotation.Transactional;

@Service
public class ScheduleService {
	
	@Autowired
	private ScheduleRepository repo;
	@Autowired
	private UserRepository repoUser;
	
	public List<ScheduleEntity> listAll() {
		List<ScheduleEntity> schedules = repo.findAll();
		return schedules;
	}
	
	@Transactional
	public ScheduleEntity create(ScheduleEntity obj) throws UserNotFoundException {
		if (repoUser.existsById(obj.getUserId())) {
			ScheduleEntity schedule = repo.save(obj);
			return schedule;
		}
		else {
			throw new UserNotFoundException("Usuário não existe!");
		}
	}
}
