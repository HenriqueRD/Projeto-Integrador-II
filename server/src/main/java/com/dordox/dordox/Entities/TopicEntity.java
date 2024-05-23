package com.dordox.dordox.Entities;

import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_topic")
public class TopicEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	private String description;
	private String category;
	@ManyToOne
    @JoinColumn(name = "user_id")
	private UserEntity user;
	@OneToMany(mappedBy = "topic", cascade = CascadeType.ALL)
	private List<CommentEntity> commnets;
	@CreationTimestamp
	private LocalDateTime createdAt;
	
	public TopicEntity() {
	}
	public TopicEntity(Long id, String title, String description, String category, UserEntity user,
			List<CommentEntity> commnets, LocalDateTime createdAt) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.category = category;
		this.user = user;
		this.commnets = commnets;
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
	public UserEntity getUser() {
		return user;
	}
	public void setUser(UserEntity user) {
		this.user = user;
	}
	public List<CommentEntity> getCommnets() {
		return commnets;
	}
	public void setCommnets(List<CommentEntity> commnets) {
		this.commnets = commnets;
	}
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
}
