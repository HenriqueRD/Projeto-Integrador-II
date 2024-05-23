package com.dordox.dordox.Entities;

import java.time.LocalDateTime;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_comment")
public class CommentEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String description;
	@ManyToOne
    @JoinColumn(name = "user_id")
	private UserEntity user;
	@ManyToOne
	@JoinColumn(name = "topic_id")
	private TopicEntity topic;
	@CreationTimestamp
	private LocalDateTime createdAt;

	public CommentEntity(Long id, String description, UserEntity user, TopicEntity topic,
			UUID topicId, LocalDateTime createdAt) {
		super();
		this.id = id;
		this.description = description;
		this.user = user;
		this.topic = topic;
		this.createdAt = createdAt;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public UserEntity getUser() {
		return user;
	}
	public void setUser(UserEntity user) {
		this.user = user;
	}
	public TopicEntity getTopic() {
		return topic;
	}
	public void setTopic(TopicEntity topic) {
		this.topic = topic;
	}
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
}
