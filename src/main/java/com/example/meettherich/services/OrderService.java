package com.example.meettherich.services;

import com.example.meettherich.model.Order;
import com.example.meettherich.model.Rich;
import com.example.meettherich.model.User;
import com.example.meettherich.repository.OrderRepository;
import com.example.meettherich.repository.RichRepository;
import com.example.meettherich.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;

    @Autowired
    private RichRepository richRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    public List<Order> findAll(){
        List<Order> allOrders = new ArrayList<>();
        repository.findAll().forEach(allOrders::add);
        return allOrders;
    };

    public Order saveOrder(Order order) {
        return repository.save(order);
    }

    public List<Order> findAllOrderByUser(User user) {
        List<Order> allOrders = new ArrayList<>();
        repository.findAllOrderByUser(user).forEach(allOrders::add);
        return allOrders;
    }

}
