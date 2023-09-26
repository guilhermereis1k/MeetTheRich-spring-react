package com.example.meettherich.controllers;

import com.example.meettherich.config.MyPasswordEncoder;
import com.example.meettherich.model.User;
import com.example.meettherich.repository.UserRepository;
import com.example.meettherich.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/users")
public class UserController {

    @Autowired
    private UserService service;

    @Autowired
    private final PasswordEncoder encoder;

    @Autowired
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository, PasswordEncoder encoder) {
        this.userRepository = userRepository;
        this.encoder = encoder;
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping
    public ResponseEntity<List<User>> findAll() {
        List<User> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping(value = "/{id}")
    public ResponseEntity<User> findById(@PathVariable Long id) {
        User obj = service.findById(id);
       return ResponseEntity.ok().body(obj);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping
    public ResponseEntity<User> insert(@RequestBody User obj) {
        MyPasswordEncoder passwordEncoder = new MyPasswordEncoder();
        obj.setPassword(passwordEncoder.encode(obj.getPassword()));
        obj = service.insert(obj);
        return ResponseEntity.ok().body(obj);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/validation")
    public ResponseEntity<Boolean> validatePassword(@RequestParam String login, @RequestParam String password) {
    boolean valid = false;

    User user = userRepository.findByLogin(login);

    if(user.isEmpty())
    }

}
