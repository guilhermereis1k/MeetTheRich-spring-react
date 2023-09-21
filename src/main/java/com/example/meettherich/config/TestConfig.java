package com.example.meettherich.config;

import com.example.meettherich.MeettherichApplication;
import com.example.meettherich.model.Order;
import com.example.meettherich.model.Rich;
import com.example.meettherich.model.User;
import com.example.meettherich.repository.OrderRepository;
import com.example.meettherich.repository.RichRepository;
import com.example.meettherich.repository.UserRepository;
import com.example.meettherich.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.time.LocalDate;
import java.util.Optional;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RichRepository richRepository;

    @Override
    public void run(String... args) throws Exception {

    };
}