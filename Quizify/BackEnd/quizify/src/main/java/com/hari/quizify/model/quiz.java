package com.hari.quizify.model;

import jakarta.persistence.*;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Entity
public class quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String topic;

    @ManyToMany
    private List<question> questionList;

    public quiz() {
    }

    public quiz(Integer id, String topic, List<question> questionList) {
        this.id = id;
        this.topic = topic;
        this.questionList = questionList;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public List<question> getQuestionList() {
        return questionList;
    }

    public void setQuestionList(List<question> questionList) {
        this.questionList = questionList;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }
}
