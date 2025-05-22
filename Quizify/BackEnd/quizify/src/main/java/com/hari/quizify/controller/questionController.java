package com.hari.quizify.controller;

import com.hari.quizify.model.question;
import com.hari.quizify.service.questionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
public class questionController {

    private final questionService questionService;

    private questionController(questionService questionService){
        this.questionService = questionService;
    }

    @GetMapping("/questions")
    public ResponseEntity<List<question>> getAllQuestions(){
        return questionService.getAllQuestions();
    }

    @GetMapping("/question/{id}")
    public ResponseEntity<question> getQuestionById(@PathVariable Integer id){
        return questionService.getQuestionById(id);
    }

    @GetMapping("/questions/{category}")
    public ResponseEntity<List<question>> getQuestionByCategory(@PathVariable String category){
        return questionService.getQuestionByCategory(category);
    }

    @PostMapping("/addQuestion")
    public ResponseEntity<question> addQuestion(@RequestBody question question){
        return questionService.addQuestion(question);
    }

    @PutMapping("/updateQuestion")
    public ResponseEntity<String> updateQuestion(@RequestBody question question){
        return questionService.updateQuestion(question);
    }

    @DeleteMapping("question/{id}")
    public ResponseEntity<String> deleteQuestion(@PathVariable Integer id){
        return questionService.deleteQuestion(id);
    }


}
