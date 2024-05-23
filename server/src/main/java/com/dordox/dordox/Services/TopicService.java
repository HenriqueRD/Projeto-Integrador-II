package com.dordox.dordox.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dordox.dordox.Entities.TopicEntity;
import com.dordox.dordox.Entities.UserEntity;
import com.dordox.dordox.Exceptions.TopicNotFoundException;
import com.dordox.dordox.Exceptions.UserNotFoundException;
import com.dordox.dordox.Repositories.TopicRepository;

import org.springframework.transaction.annotation.Transactional;

@Service
public class TopicService {
	
	@Autowired
	private TopicRepository repo;
	
	public List<TopicEntity> listAll() {
		List<TopicEntity> schedules = repo.findAll();
		return schedules;
	}
	
	public TopicEntity find(Long id) throws TopicNotFoundException {
		TopicEntity topic = repo.findById(id).orElseThrow(() -> new TopicNotFoundException("Tópico não existe!"));
		return topic;
	}
	
	@Transactional
	public TopicEntity create(TopicEntity obj, Long id) throws UserNotFoundException {
		try {
			obj.setUser(new UserEntity());
			obj.getUser().setId(id);
			TopicEntity schedule = repo.save(obj);
			return schedule;
		} catch (Exception e) {
			throw new UserNotFoundException("Erro ao criar tópico!");
		}
		
	}
}
