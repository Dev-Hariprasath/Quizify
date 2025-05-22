package com.hari.quizify.controller;


import com.hari.quizify.model.account;
import com.hari.quizify.service.accountService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("api")
public class accountController {

    public accountService accountService;

    public accountController(accountService accountService){
        this.accountService = accountService;
    }


    @GetMapping("/users")
    public ResponseEntity<List<account>> getUsers(){
        return accountService.getUsers();
    }

    @PostMapping("/login")
    public ResponseEntity<account> getUser(@RequestBody account account){
        return accountService.getUser(account);
    }

    @PostMapping("/signup")
    public ResponseEntity<account> addUser(@RequestBody account account){
        return accountService.addUser(account);
    }

    @PutMapping("/update-account")
    public ResponseEntity<String> updateUser(@RequestBody account account){
        return accountService.updateUser(account);
    }

    @DeleteMapping("/delete-user/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Integer id){
        return accountService.deleteUser(id);
    }
}
