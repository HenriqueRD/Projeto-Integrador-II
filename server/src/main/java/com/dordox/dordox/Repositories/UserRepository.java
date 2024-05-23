package com.dordox.dordox.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dordox.dordox.Entities.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
	
	public boolean existsByEmail(String email);
	public List<UserEntity> findByNameContainingIgnoreCase(String name);
	public Optional<UserEntity> findByEmail(String email);
}
