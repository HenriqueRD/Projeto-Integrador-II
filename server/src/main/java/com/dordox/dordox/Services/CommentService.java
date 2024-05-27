package com.dordox.dordox.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dordox.dordox.Dto.CommentInputDto;
import com.dordox.dordox.Entities.CommentEntity;
import com.dordox.dordox.Entities.TopicEntity;
import com.dordox.dordox.Entities.UserEntity;
import com.dordox.dordox.Exceptions.TopicNotFoundException;
import com.dordox.dordox.Repositories.CommentRepository;
import com.dordox.dordox.Repositories.TopicRepository;

import org.springframework.transaction.annotation.Transactional;

@Service
public class CommentService {
	
	@Autowired
	private CommentRepository repo;

	@Autowired
	private TopicRepository repoTopic;
	
	@Transactional
	public CommentEntity create(CommentInputDto obj, Long id) throws TopicNotFoundException {
		TopicEntity topic = repoTopic.findById(obj.getTopicId()).orElseThrow(() -> new TopicNotFoundException("Tópico não existe!"));
		CommentEntity cache = new CommentEntity(obj);
		cache.setTopic(topic);
		cache.setUser(new UserEntity());
		cache.getUser().setId(id);
		CommentEntity schedule = repo.save(cache);
		return schedule;
	}
}
