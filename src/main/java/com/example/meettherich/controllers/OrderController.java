package com.example.meettherich.controllers;

import com.example.meettherich.model.Order;
import com.example.meettherich.model.User;
import com.example.meettherich.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/order")
public class OrderController {

    @Autowired
    private OrderService service;


    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping(value= "/{richId}")
    public void createOrder(@PathVariable(name="richId") Long richId, @RequestBody User user) {
        service.createOrder(richId, user);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping
    public List<Order> findAll() {
        return service.findAll();
    }

}
