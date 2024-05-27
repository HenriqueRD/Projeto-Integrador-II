package com.dordox.dordox.Dto;

import java.time.LocalDateTime;

import com.dordox.dordox.Entities.CommentEntity;

import lombok.Data;

@Data
public class CommentOutputDto {
	private Long id;
	private String description;
	private UserDto user;
	private LocalDateTime createdAt;
	
	public CommentOutputDto(CommentEntity obj) {
		this.id = obj.getId();
		this.description = obj.getDescription();
		this.user = new UserDto(obj.getUser());
		this.createdAt = obj.getCreatedAt();
	}
}
