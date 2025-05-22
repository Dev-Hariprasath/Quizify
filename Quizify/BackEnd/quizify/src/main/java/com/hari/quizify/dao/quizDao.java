package com.hari.quizify.dao;

import com.hari.quizify.model.quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface quizDao extends JpaRepository<quiz, Integer> {

}
