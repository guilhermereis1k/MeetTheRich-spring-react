package com.example.meettherich.model;

import lombok.Data;
import lombok.Getter;

import java.io.Serializable;

public record AuthenticationDTO(String login, String password) implements Serializable {
}
