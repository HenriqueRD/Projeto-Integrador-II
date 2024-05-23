package com.dordox.dordox.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dordox.dordox.Entities.CommentEntity;

public interface CommentRepository extends JpaRepository<CommentEntity, Long> {
	
}
