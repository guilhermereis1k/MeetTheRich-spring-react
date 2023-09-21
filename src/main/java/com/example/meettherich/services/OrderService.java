package com.example.meettherich.services;

import com.example.meettherich.model.Order;
import com.example.meettherich.model.Rich;
import com.example.meettherich.model.User;
import com.example.meettherich.repository.OrderRepository;
import com.example.meettherich.repository.RichRepository;
import com.example.meettherich.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;

    @Autowired
    private RichRepository richRepository;

    public Order createOrder(Long richId, User user) {
        Optional<Rich> richOptional = richRepository.findById(richId);

        if (richOptional.isPresent()) {
            Rich rich = richOptional.get();
            LocalDate instant = LocalDate.now();
            Order order = new Order(user, rich, instant);
            return repository.save(order);
        } else {
            // Trate o caso em que o Rich não foi encontrado
            throw new RuntimeException("No rich was found with this id: " + richId);
        }
    }
}
