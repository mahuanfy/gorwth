package com.mahuan.growthlog.repository;

import com.mahuan.growthlog.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {

    User findByName(String name);

    User findByNameAndPassword(String userName, String name);

    List<User> findByNameLike(String name);
}
