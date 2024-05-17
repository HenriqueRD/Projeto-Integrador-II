package com.dordox.dordox.Repositories;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dordox.dordox.Entities.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, UUID> {
	
	public boolean existsByEmail(String email);
	public List<UserEntity> findByNameContainingIgnoreCase(String name);
	public Optional<UserEntity> findByEmail(String email);
}
