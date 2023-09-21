package com.example.meettherich.services;

import com.example.meettherich.model.Order;
import com.example.meettherich.model.Rich;
import com.example.meettherich.model.User;
import com.example.meettherich.repository.OrderRepository;
import com.example.meettherich.repository.RichRepository;
import com.example.meettherich.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.function.Supplier;
import java.util.logging.Logger;


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

    public Order createOrder(Long richId, User user) {
            Optional<Rich> richOptional = richRepository.findById(richId);
            Rich rich = richOptional.get();

            user = userService.insert(user);

            LocalDate instant = LocalDate.now();
            Order order = new Order(user, rich, instant);
            return repository.save(order);
    }
}
