package com.mahuan.growthlog.controllers;

import com.mahuan.growthlog.entity.Diary;
import com.mahuan.growthlog.repository.DiaryRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api("成长日志部分")
@RestController
@RequestMapping("/")
public class DiaryController {

    @Autowired
    private DiaryRepository diaryRepository;

    @ApiOperation(value = "添加一个成长日志")
    @PostMapping("/diary")
    public ResponseEntity<?> addDiary(@RequestBody Diary diary) {
        return new ResponseEntity<>(this.diaryRepository.save(diary), HttpStatus.CREATED);
    }

    @ApiOperation(value = "通过用户Id查询用户日志信息")
    @GetMapping(value = "/diary/{userId}")
    public ResponseEntity<?> queryDiaryById(@PathVariable("userId") Long userId) {
        List<Diary> diaries = this.diaryRepository.findByUserId(userId);
        return new ResponseEntity<>(diaries, HttpStatus.OK);
    }

    @ApiOperation("查询所有成长日志")
    @GetMapping("/diary")
    public ResponseEntity<?> queryDiary() {
        return new ResponseEntity<>(this.diaryRepository.findAll(), HttpStatus.OK);
    }
    @ApiOperation("通过id删除日志信息")
    @DeleteMapping("/diary/{id}")
    public ResponseEntity<?> deleteDiary(@PathVariable("id") long id) {
        this.diaryRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.NO_CONTENT);
    }
}
