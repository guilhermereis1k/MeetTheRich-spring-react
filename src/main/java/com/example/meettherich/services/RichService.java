package com.example.meettherich.services;

import com.example.meettherich.model.Rich;
import com.example.meettherich.repository.RichRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RichService {

    @Autowired
    private RichRepository repository;

    public List<Rich> findAllByOrderById() {
        return repository.findAllByOrderById();
    }

    public Rich findById(Long id) {
        Optional<Rich> obj = repository.findById(id);
        return obj.get();}
}
