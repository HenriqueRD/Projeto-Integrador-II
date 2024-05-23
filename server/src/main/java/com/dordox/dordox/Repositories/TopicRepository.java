package com.dordox.dordox.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dordox.dordox.Entities.TopicEntity;
public interface TopicRepository extends JpaRepository<TopicEntity, Long> {
	
}
