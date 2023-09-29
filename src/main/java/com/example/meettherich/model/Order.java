package com.example.meettherich.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "orders")
public class Order implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    @ManyToOne
    @JoinColumn(name = "users_id")
    private User users;

    @ManyToOne
    @JoinColumn(name = "riches_id")
    private Rich riches;

    private LocalDate instant;

    public Order(User user, Rich rich, LocalDate instant) {
        this.users = user;
        this.riches = rich;
        this.instant = instant;
    }

    public Integer getId() {
        return id;
    }
}
