package com.example.meettherich.config;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

public class MyPasswordEncoder implements PasswordEncoder {
    static BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Override
    public String encode(CharSequence rawPassword) {
        return encoder.encode(rawPassword);
    }

    @Override
    public boolean matches(CharSequence rawPassword, String encodedPassword) {
        return false;
    }

    @Override
    public boolean upgradeEncoding(String encodedPassword) {
        return PasswordEncoder.super.upgradeEncoding(encodedPassword);
    }
}
