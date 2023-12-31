package com.example.meettherich.repository;

import com.example.meettherich.model.Rich;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RichRepository extends JpaRepository<Rich, Long> {

    public List<Rich> findAllByOrderById();

}
