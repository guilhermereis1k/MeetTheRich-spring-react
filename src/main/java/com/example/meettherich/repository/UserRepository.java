package com.example.meettherich.repository;

import com.example.meettherich.model.Rich;
import com.example.meettherich.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    public List<User> findAllByOrderById();

}
