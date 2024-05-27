package com.dordox.dordox.Dto;

import com.dordox.dordox.Entities.TopicEntity;

public class TopicInputDto {
	private String title;
	private String description;
	private String category;

	public TopicInputDto() {
	}
	public TopicInputDto(TopicEntity obj) {
		this.title = obj.getTitle();
		this.description = obj.getDescription();
		this.category = obj.getCategory();
	}
	public TopicInputDto(String title, String description, String category) {
		this.title = title;
		this.description = description;
		this.category = category;
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
}
