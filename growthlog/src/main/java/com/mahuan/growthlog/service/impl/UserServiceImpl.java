package com.mahuan.growthlog.service.impl;

import com.mahuan.growthlog.entity.User;
import com.mahuan.growthlog.repository.UserRepository;
import com.mahuan.growthlog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void insertUser() {
//        User user = new User("小明", "123", 2);
//        User user2 = new User("小假", "234", 2);
//        userRepository.save(user);
//        userRepository.save(user2);
    }
}
