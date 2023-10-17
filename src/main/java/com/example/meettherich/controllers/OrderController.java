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
import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/order")
public class OrderController {

    @Autowired
    private OrderService service;

    @Autowired
    private RichService richService;


    @PostMapping("/create/{richId}")
    public ResponseEntity<Order> saveOrder(@PathVariable Long richId, @RequestBody ZonedDateTime meetingDate) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        ZonedDateTime localDate = ZonedDateTime.now();
        Rich rich = richService.findById(richId);

        Order order = new Order(user, rich, localDate, meetingDate);
        service.saveOrder(order);
        return ResponseEntity.ok().body(order);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Order>> findAllOrderByUser() {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<Order> orders = service.findAllOrderByUser(user);
        return ResponseEntity.ok().body(orders);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> delete(@RequestBody Long orderId) {
        service.delete(orderId);
        return ResponseEntity.ok().body("Order de id " + orderId + " removido.");
    }
}
