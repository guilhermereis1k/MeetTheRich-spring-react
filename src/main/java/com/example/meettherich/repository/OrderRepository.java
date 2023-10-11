package com.example.meettherich.repository;

import com.example.meettherich.model.Order;
import com.example.meettherich.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("orderJpaRepository")
public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findAllOrderByUser(User user);
}
