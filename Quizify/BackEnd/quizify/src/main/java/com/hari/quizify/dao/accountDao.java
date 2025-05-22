package com.hari.quizify.dao;

import com.hari.quizify.model.account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface accountDao extends JpaRepository<account, Integer> {

    public account findUSerByMail(String mail);

}
