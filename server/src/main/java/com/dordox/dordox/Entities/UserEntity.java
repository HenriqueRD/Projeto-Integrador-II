package com.dordox.dordox.Entities;

import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.validator.constraints.Length;

import com.dordox.dordox.Dto.UserDto;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "tb_user")
public class UserEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotBlank
	@Length(min = 5, max = 64)
	private String name;
	@NotBlank
	private String phone;
	@NotBlank
	@Email(message = "O campo [email] deve conter um Email valido!")
	private String email;
	@NotBlank
	@Length(min = 4)
	private String password;
	@JsonIgnore
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<ScheduleEntity> schedules;
	@JsonIgnore
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<TopicEntity> topics;
	@CreationTimestamp
	private LocalDateTime createdAt;
	
	public UserEntity() {
	}
	public UserEntity(UserDto obj) {
		this.name = obj.getName();
		this.phone = obj.getPhone();
		this.email = obj.getEmail();
		this.createdAt = obj.getCreatedAt();
	}
	public UserEntity(Long id, String name, String phone, String email, String password, List<ScheduleEntity> schedules, 
			LocalDateTime createdAt) {
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.password = password;
		this.schedules = schedules;
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public List<ScheduleEntity> getSchedules() {
		return schedules;
	}
	public void setSchedules(List<ScheduleEntity> schedules) {
		this.schedules = schedules;
	}
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
}
