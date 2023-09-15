package com.example.meettherich.services;

import com.example.meettherich.model.Rich;
import com.example.meettherich.repository.RichRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RichService {

    @Autowired
    private RichRepository repository;

    public void insert(Long id) {

    }

    public List<Rich> findAllByOrderById() {
        return repository.findAllByOrderById();
    }
}
