package com.dordox.dordox.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dordox.dordox.Entities.ScheduleEntity;

public interface ScheduleRepository extends JpaRepository<ScheduleEntity, Long> {
}
