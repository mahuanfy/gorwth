package com.mahuan.growthlog.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "t_follow")
public class Follow {
    @Id
    @GeneratedValue
    private Long id;
    private Long userId;
    private Long userFollowId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getUserFollowId() {
        return userFollowId;
    }

    public void setUserFollowId(Long userFollowId) {
        this.userFollowId = userFollowId;
    }
}
