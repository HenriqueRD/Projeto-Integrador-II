package com.dordox.dordox.Dto;

import java.time.LocalDate;

import com.dordox.dordox.Entities.ScheduleEntity;

public class ScheduleDto {
	
	private String title;
	private String description;
	private LocalDate date;
	private String hours;
	
	public ScheduleDto() {
	}
	public ScheduleDto(ScheduleEntity obj) {
		this.title = obj.getTitle();
		this.description = obj.getDescription();
		this.date = obj.getDate();
		this.hours = obj.getHours();
	}
	public ScheduleDto(String title, String description, LocalDate date, String hours) {
		this.title = title;
		this.description = description;
		this.date = date;
		this.hours = hours;
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
}