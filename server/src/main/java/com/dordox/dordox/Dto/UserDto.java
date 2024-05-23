package com.dordox.dordox.Dto;

import java.time.LocalDateTime;

import com.dordox.dordox.Entities.UserEntity;

public class UserDto {
	private String name;
	private String phone;
	private String email;
	private LocalDateTime createdAt;
	
	public UserDto(UserEntity obj) {
		super();
		this.name = obj.getName();
		this.phone = obj.getPhone();
		this.email = obj.getEmail();
		this.createdAt = obj.getCreatedAt();
	}
	
	public UserDto(String name, String phone, String email, LocalDateTime createdAt) {
		super();
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.createdAt = createdAt;
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
