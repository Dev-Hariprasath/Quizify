package com.hari.quizify.controller;


import com.hari.quizify.model.questionWrapper;
import com.hari.quizify.model.quiz;
import com.hari.quizify.model.response;
import com.hari.quizify.service.quizService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api")
public class quizController {

    private final quizService quizService;

    // Use public constructor so Spring can inject quizService
    public quizController(quizService quizService) {
        this.quizService = quizService;
    }

    @GetMapping("/allQuizzes")
    public ResponseEntity<List<quiz>> getAllQuiz(){
        return quizService.getAllQuiz();
    }

    @GetMapping("/getQuiz/{id}")
    public ResponseEntity<List<questionWrapper>> getQuiz(@PathVariable Integer id){
        return quizService.getQuiz(id);
    }

    @PostMapping("/submit/{id}")
    public ResponseEntity<Map<String, Integer>> getScore(@PathVariable Integer id,
                                                         @RequestBody List<response> responses) {
        return quizService.getScore(id, responses);
    }

    @PostMapping("/addQuiz")
    public ResponseEntity<String> addQuiz(@RequestParam String topic, @RequestParam String category, @RequestParam int num, @RequestParam String difficulty) {
        return quizService.addQuiz(topic, category, num, difficulty);
    }


    @DeleteMapping("/quiz/{id}")
    public void deleteQuiz(@PathVariable Integer id){
        quizService.deleteQuiz(id);
    }
}

