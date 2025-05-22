package com.hari.quizify.dao;

import com.hari.quizify.model.question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface questionDao extends JpaRepository<question, Integer> {

    List<question> findByCategory(String category);

    @Query(value = "SELECT * FROM question q WHERE q.category = :category AND q.difficulty = :difficulty ORDER BY RANDOM() LIMIT :#{#num}", nativeQuery = true)
    public List<question> findQuestionsForQuiz(String category, int num, String difficulty);
}
