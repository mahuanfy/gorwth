package com.mahuan.growthlog.controllers;

import com.mahuan.growthlog.entity.User;
import com.mahuan.growthlog.repository.UserRepository;
import com.mahuan.growthlog.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Api(value = "用户信息操作")
@RestController
@RequestMapping("/")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;

    @ApiOperation(value = "查询所有用户")
    @GetMapping(value = "/user")
    public ResponseEntity<?> userInfoAll() {
        List<User> users = userRepository.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @ApiOperation(value = "通过id用户信息")
    @PostMapping(value = "/user/{id}")
    public ResponseEntity<?> userInfoOne(@PathVariable("id") long id) {
        Optional<User> user = userRepository.findById(id);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @ApiOperation(value = "User login")
    @PostMapping(value = "/user")
    public ResponseEntity<?> login(@RequestBody User user) {

        User user1 = userRepository.findByNameAndPassword(user.getName(), user.getPassword());
        if (user1 != null) {
            return new ResponseEntity<>(user1, HttpStatus.OK);
        }
        return new ResponseEntity<>(user1, HttpStatus.NO_CONTENT);

    }

    @ApiOperation(value = "User Register")
    @PutMapping(value = "/user")
    public ResponseEntity<?> register(@RequestBody User user) {
        userRepository.save(user);
        return new ResponseEntity<>(null, HttpStatus.OK);

    }
}
