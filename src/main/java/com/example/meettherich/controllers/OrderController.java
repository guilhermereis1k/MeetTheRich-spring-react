package com.example.meettherich.controllers;

import com.example.meettherich.model.Order;
import com.example.meettherich.model.Rich;
import com.example.meettherich.model.User;
import com.example.meettherich.services.OrderService;
import com.example.meettherich.services.RichService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/order")
public class OrderController {

    @Autowired
    private OrderService service;

    @Autowired
    private RichService richService;

    @GetMapping
    public List<Order> findAll() {
        return service.findAll();
    }

    @PostMapping("/{richId}")
    public ResponseEntity<Order> saveOrder(@PathVariable Long richId) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        LocalDate localDate = LocalDate.now();
        Rich rich = richService.findById(richId);

        Order order = new Order(user, rich, localDate);
        service.saveOrder(order);
        return ResponseEntity.ok().body(order);
    }
}
