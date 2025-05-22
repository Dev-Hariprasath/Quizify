package com.hari.quizify.service;


import com.hari.quizify.dao.questionDao;
import com.hari.quizify.model.question;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class questionService {

    private final questionDao questionDao;

    private questionService(questionDao questionDao){
        this.questionDao = questionDao;
    }


    public ResponseEntity<List<question>> getAllQuestions(){
        try {
            List<question> questions = questionDao.findAll();
            return new ResponseEntity<>(questions, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
        }
    }


    public ResponseEntity<List<question>> getQuestionByCategory(String category){

        if(category == null) return new ResponseEntity<>(new ArrayList<>(), HttpStatus.NOT_FOUND);

        try {
            List<question> questionsListByCategory = questionDao.findByCategory(category);
            return new ResponseEntity<>(questionsListByCategory, HttpStatus.FOUND);
        }catch (Exception e){
            return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
        }
    }


    public ResponseEntity<question> getQuestionById(Integer id){

        if(id == null) return new ResponseEntity<>(new question(), HttpStatus.NOT_FOUND);

        try {
            return new ResponseEntity<>(questionDao.findById(id).orElse(new question()), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(new question(), HttpStatus.NOT_FOUND);
        }
    }


    public ResponseEntity<question> addQuestion(question question){

        if(question == null) return new ResponseEntity<>(new question(), HttpStatus.NOT_FOUND);

        try {
            return new ResponseEntity<>(questionDao.save(question), HttpStatus.CREATED);
        } catch (Exception e){
            return new ResponseEntity<>(new question(), HttpStatus.BAD_REQUEST);
        }
    }


    public ResponseEntity<String> updateQuestion(question question){

        if(question.getId() == null) return new ResponseEntity<>("Id should Not Be Null", HttpStatus.NOT_FOUND);

        question qn = questionDao.save(question);

        try{
            return new ResponseEntity<>("The Question As Been Updated", HttpStatus.ACCEPTED);
        } catch (Exception e) {
            return new ResponseEntity<>("Not Found", HttpStatus.BAD_REQUEST);
        }
    }


    public ResponseEntity<String> deleteQuestion(Integer id){

        if(id == null) return new ResponseEntity<>("Id should Not Be Null", HttpStatus.NOT_FOUND);

        try{
            questionDao.deleteById(id);
            return new ResponseEntity<>("Question As been deleted", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Not Found", HttpStatus.BAD_REQUEST);
        }
    }
}
