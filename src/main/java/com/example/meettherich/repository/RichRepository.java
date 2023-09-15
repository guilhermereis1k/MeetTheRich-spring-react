package com.example.meettherich.repository;

import com.example.meettherich.model.Rich;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RichRepository extends JpaRepository<Rich, Long> {

    public List<Rich> findAllByOrderById();

}
