package com.dordox.dordox.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dordox.dordox.Entities.TopicEntity;
import java.util.List;

public interface TopicRepository extends JpaRepository<TopicEntity, Long> {
	public List<TopicEntity> findByCategoryContainingIgnoreCase(String category);
}
