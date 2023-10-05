package com.example.meettherich.model;

import java.io.Serializable;

public record RegisterDTO(String login, String email, String password, UserRole role) implements Serializable {
}
