package com.example.meettherich.controllers;

import com.example.meettherich.config.MyPasswordEncoder;
import com.example.meettherich.model.User;
import com.example.meettherich.repository.UserRepository;
import com.example.meettherich.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
    @PostMapping(value = "/create")
    public ResponseEntity<User> insert(@RequestBody User obj) {
        MyPasswordEncoder passwordEncoder = new MyPasswordEncoder();
        obj.setPassword(passwordEncoder.encode(obj.getPassword()));
        obj = service.insert(obj);
        return ResponseEntity.ok().body(obj);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/validation")
    public ResponseEntity<Boolean> createUser(@RequestBody User user) {
        // Aqui você pode acessar os campos 'login' e 'password' do objeto User
        String login = user.getLogin();
        String password = user.getPassword();
        Optional<User> optUser = userRepository.findByLogin(login);

        boolean valid = false;

        if (optUser.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(valid);
        }


        valid = encoder.matches(password, optUser.get().getPassword());

        HttpStatus status = (valid) ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
        return ResponseEntity.status(status).body(valid);
    }
}
