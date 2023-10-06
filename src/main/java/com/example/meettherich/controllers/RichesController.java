package com.example.meettherich.controllers;

import com.example.meettherich.model.Rich;
import com.example.meettherich.services.RichService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/riches")
public class RichesController {

    @Autowired
    private RichService service;

    @GetMapping
    public ResponseEntity<List<Rich>> findAllByOrderById() {
        List<Rich> list = service.findAllByOrderById();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Rich> findById(@PathVariable Long id) {
        Rich obj = service.findById(id);
       return ResponseEntity.ok().body(obj);
    }

}
