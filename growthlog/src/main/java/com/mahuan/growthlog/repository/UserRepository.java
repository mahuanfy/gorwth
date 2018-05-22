package com.mahuan.growthlog.repository;

import com.mahuan.growthlog.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

    User findByName(String name);
}
