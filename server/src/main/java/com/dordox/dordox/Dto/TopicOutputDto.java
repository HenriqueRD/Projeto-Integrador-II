package com.dordox.dordox.Dto;

import java.time.LocalDateTime;
import java.util.List;

import com.dordox.dordox.Entities.TopicEntity;

public class TopicOutputDto {
	private Long id;
	private String title;
	private String description;
	private String category;
	private UserDto user;
	private List<CommentOutputDto> comments;
	private LocalDateTime createdAt;
	public TopicOutputDto() {
	}
	public TopicOutputDto(TopicEntity obj) {
		this.id = obj.getId();
		this.title = obj.getTitle();
		this.description = obj.getDescription();
		this.category = obj.getCategory();
		this.user = new UserDto(obj.getUser());
		this.comments = obj.getComments() != null ? obj.getComments().stream().map(x -> new CommentOutputDto(x)).toList() : null;
		this.createdAt = obj.getCreatedAt();
	}
	public TopicOutputDto(Long id, String title, String description, String category, UserDto user,
			List<CommentOutputDto> comments, LocalDateTime createdAt) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.category = category;
		this.user = user;
		this.comments = comments;
		this.createdAt = createdAt;
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
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public UserDto getUser() {
		return user;
	}
	public void setUser(UserDto user) {
		this.user = user;
	}
	public List<CommentOutputDto> getComments() {
		return comments;
	}
	public void setComments(List<CommentOutputDto> comments) {
		this.comments = comments;
	}
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
}
