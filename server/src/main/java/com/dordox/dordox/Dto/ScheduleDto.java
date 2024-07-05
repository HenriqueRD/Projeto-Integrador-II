package com.dordox.dordox.Dto;

import java.time.LocalDateTime;

import com.dordox.dordox.Entities.ScheduleEntity;


public class ScheduleDto {
	
	private Long id;
	private String title;
	private String description;
	private LocalDateTime start;
	private LocalDateTime end;
	private UserDto user;
	
	public ScheduleDto() {
	}
	public ScheduleDto(ScheduleEntity obj) {
		this.id = obj.getId();
		this.title = obj.getTitle();
		this.description = obj.getDescription();
		this.start = obj.getStart();
		this.end = obj.getEnd();
		this.user = new UserDto(obj.getUser());
	}
	public ScheduleDto(Long id, String title, String description, LocalDateTime start, LocalDateTime end, UserDto user) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.start = start;
		this.end = end;
		this.user = user;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public LocalDateTime getStart() {
		return start;
	}
	public void setStart(LocalDateTime start) {
		this.start = start;
	}
	public LocalDateTime getEnd() {
		return end;
	}
	public void setEnd(LocalDateTime end) {
		this.end = end;
	}
	public UserDto getUser() {
		return user;
	}
	public void setUser(UserDto user) {
		this.user = user;
	}
}