package com.dordox.dordox.Dto;

import java.time.LocalDateTime;

import com.dordox.dordox.Entities.UserEntity;

public class UserDto {
	private Long id;
	private String name;
	private String phone;
	private String email;
	private LocalDateTime createdAt;
	
	public UserDto(UserEntity obj) {
		this.id = obj.getId();
		this.name = obj.getName();
		this.phone = obj.getPhone();
		this.email = obj.getEmail();
		this.createdAt = obj.getCreatedAt();
	}
	public UserDto(Long id, String name, String phone, String email, LocalDateTime createdAt) {
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.createdAt = createdAt;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
}
