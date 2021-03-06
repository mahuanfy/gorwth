package com.mahuan.growthlog.repository;

import com.mahuan.growthlog.entity.Diary;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DiaryRepository extends JpaRepository<Diary,Long> {


    List<Diary> findByUserIdOrderByTimeDesc(Long userId);
}
