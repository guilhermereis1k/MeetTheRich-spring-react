package com.example.meettherich.controllers;

import com.example.meettherich.model.Rich;
import com.example.meettherich.services.RichService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/riches")
public class RichesController {

    @Autowired
    private RichService service;

    @CrossOrigin(origins = "http://localhost:5174")
    @GetMapping
    public ResponseEntity<List<Rich>> findAllByOrderById() {
        List<Rich> list = service.findAllByOrderById();
        return ResponseEntity.ok().body(list);
    }

}
