package com.gitstart.services;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GitHubEntity {
	
    private String name;
    
    @JsonProperty("created_at")
    private String createdAt;

    public GitHubEntity() {
		super();
	}

	public GitHubEntity(String name, String createdAt) {
		super();
		this.name = name;
		this.createdAt = createdAt;
	}

	public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

	public String getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}

    
}
