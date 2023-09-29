package com.example.meettherich.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
@Entity
@Table(name = "riches")
public class Rich implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer id;
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "riches")
    private List<Order> orders = new ArrayList<>();

    @Column(columnDefinition = "TEXT")
    private String aboutText;
    private String imgUrl;
    private String nationality;
    private LocalDate birthDate;
    private Double fortune;

    private String company;
}
