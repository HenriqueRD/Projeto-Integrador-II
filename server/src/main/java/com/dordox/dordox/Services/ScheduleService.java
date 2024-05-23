package com.dordox.dordox.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dordox.dordox.Dto.ScheduleDto;
import com.dordox.dordox.Entities.ScheduleEntity;
import com.dordox.dordox.Entities.UserEntity;
import com.dordox.dordox.Repositories.ScheduleRepository;

import org.springframework.transaction.annotation.Transactional;

@Service
public class ScheduleService {
	
	@Autowired
	private ScheduleRepository repo;
	
	public List<ScheduleEntity> listAll() {
		List<ScheduleEntity> schedules = repo.findAll();
		return schedules;
	}
	
	@Transactional
	public ScheduleEntity create(ScheduleDto obj, Long id) {		
		ScheduleEntity cache = new ScheduleEntity(obj);
		cache.setUser(new UserEntity());
		cache.getUser().setId(id);
		ScheduleEntity schedule = repo.save(cache);
		return schedule;
	}
}
