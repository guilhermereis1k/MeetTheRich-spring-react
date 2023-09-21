package com.example.meettherich.controllers;

import com.example.meettherich.model.User;
import com.example.meettherich.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/order")
public class OrderController {

    @Autowired
    private OrderService service;

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/create")
    public String createOrder(@RequestParam Long richId, @ModelAttribute("user") User user) {
        // Lógica para criar a Order associando o Rich e o User
        service.createOrder(richId, user);
        return "redirect:/success"; // Redirecione para uma página de sucesso
    }

}
