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
    @JoinColumn(name = "userId")
    private User user;

    @ManyToOne
    @JoinColumn(name = "richId")
    private Rich rich;

    private LocalDate instant;

    public Order(User user, Rich rich, LocalDate instant) {
        this.user = user;
        this.rich = rich;
        this.instant = instant;
    }

    public Integer getId() {
        return id;
    }
}
