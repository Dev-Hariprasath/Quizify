package com.hari.quizify.service;


import com.hari.quizify.dao.questionDao;
import com.hari.quizify.dao.quizDao;
import com.hari.quizify.model.question;
import com.hari.quizify.model.questionWrapper;
import com.hari.quizify.model.quiz;
import com.hari.quizify.model.response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class quizService {

    private final quizDao quizDao;
    private final questionDao questionDao;

    public quizService(quizDao quizDao, questionDao questionDao) {
        this.quizDao = quizDao;
        this.questionDao = questionDao;
    }

    public ResponseEntity<String> addQuiz(String topic, String category, int num, String difficulty) {
        try {
            quiz quiz = new quiz();
            quiz.setTopic(topic);
            List<question> questionList = questionDao.findQuestionsForQuiz(category, num, difficulty);
            quiz.setQuestionList(questionList);
            quizDao.save(quiz);
            return new ResponseEntity<>("The Quiz has been successfully uploaded to the database", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Error occurred", HttpStatus.BAD_REQUEST);
        }
    }


    public ResponseEntity<List<questionWrapper>> getQuiz(Integer id){

        try {
            quiz quiz = quizDao.findById(id).orElse(new quiz());
            List<question> questionsFromDB = quiz.getQuestionList();
            List<questionWrapper> questionWrapperList = new ArrayList<>();

            for ( question qn : questionsFromDB ){
                questionWrapper questionWrapper = new questionWrapper(qn.getId(), qn.getQuestion(), qn.getOption1(), qn.getOption2(), qn.getOption3(), qn.getOption4());
                questionWrapperList.add(questionWrapper);
            }

            return new ResponseEntity<>(questionWrapperList, HttpStatus.OK);

        }catch (Exception e){
            return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<Map<String, Integer>> getScore(Integer id, List<response> responses) {

        try {
            quiz quiz = quizDao.findById(id).orElseThrow(() -> new RuntimeException("Quiz not found"));
            List<question> questionsFromDB = quiz.getQuestionList();

            if (responses.size() != questionsFromDB.size()) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }

            int score = 0;

            for (int i = 0; i < questionsFromDB.size(); i++) {
                if (responses.get(i).getResponse().equals(questionsFromDB.get(i).getAnswer())) {
                    score++;
                }
            }

            Map<String, Integer> result = new HashMap<>();
            result.put("score", score);
            result.put("total", questionsFromDB.size());

            return new ResponseEntity<>(result, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


    public ResponseEntity<List<quiz>> getAllQuiz() {
        return new ResponseEntity<>(quizDao.findAll(), HttpStatus.OK);
    }

    public void deleteQuiz(Integer id) {
        quizDao.deleteById(id);
    }
}

