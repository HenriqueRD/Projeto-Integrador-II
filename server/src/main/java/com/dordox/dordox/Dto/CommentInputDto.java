package com.dordox.dordox.Dto;

public class CommentInputDto {
	private String description;
	private Long topicId;
	
	public CommentInputDto() {
	}
	public CommentInputDto(String description, Long topicId) {
		super();
		this.description = description;
		this.topicId = topicId;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Long getTopicId() {
		return topicId;
	}
	public void setTopicId(Long topicId) {
		this.topicId = topicId;
	}
}
