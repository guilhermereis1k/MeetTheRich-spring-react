package com.example.meettherich.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;

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

    @Column(columnDefinition = "TEXT")
    private String aboutText;
    private String imgUrl;
    private String nationality;
    private LocalDate birthDate;
    private Double fortune;

    private String company;
}
