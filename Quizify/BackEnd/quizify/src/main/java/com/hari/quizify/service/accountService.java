package com.hari.quizify.service;

import com.hari.quizify.dao.accountDao;
import com.hari.quizify.model.account;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class accountService {

    public accountDao accountDao;

    public accountService(accountDao accountDao){
        this.accountDao = accountDao;
    }

    public ResponseEntity<List<account>> getUsers(){
        try {
            List<account> users = accountDao.findAll();
            return new ResponseEntity<>(users, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<account> getUser(account user) {
        try {
            account found = accountDao.findUSerByMail(user.getMail());
            if (found != null && found.getPassword().equals(user.getPassword())) {
                return new ResponseEntity<>(found, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


    public ResponseEntity<account> addUser(account account){

        if(account == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        try {
            accountDao.save(account);
            return new ResponseEntity<>(account, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(new account(), HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<String> updateUser(account account){
        try {
            accountDao.save(account);
            return new ResponseEntity<>("Account Updated for username "+account.getName(), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<String> deleteUser(Integer id){
        try {
            accountDao.deleteById(id);
            return new ResponseEntity<>("Account Deleted Successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
