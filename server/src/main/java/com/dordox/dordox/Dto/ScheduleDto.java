package com.dordox.dordox.Dto;

import java.time.LocalDate;

import com.dordox.dordox.Entities.ScheduleEntity;

public class ScheduleDto {
	
	private Long id;
	private String title;
	private String description;
	private LocalDate date;
	private String hours;
	private UserDto user;
	
	public ScheduleDto() {
	}
	public ScheduleDto(ScheduleEntity obj) {
		this.id = obj.getId();
		this.title = obj.getTitle();
		this.description = obj.getDescription();
		this.date = obj.getDate();
		this.hours = obj.getHours();
		this.user = new UserDto(obj.getUser());
	}
	public ScheduleDto(Long id, String title, String description, LocalDate date, String hours, UserDto user) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.date = date;
		this.hours = hours;
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
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public String getHours() {
		return hours;
	}
	public void setHours(String hours) {
		this.hours = hours;
	}
	public UserDto getUser() {
		return user;
	}
	public void setUser(UserDto user) {
		this.user = user;
	}
}