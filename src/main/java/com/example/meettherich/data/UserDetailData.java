package com.example.meettherich.data;
import com.example.meettherich.model.User;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

@AllArgsConstructor
public class UserDetailData implements UserDetails{

    private final Optional<com.example.meettherich.model.User> user;

    @Autowired
    public UserDetailData(Optional<User> user) {
        this.user = user;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return new ArrayList<>();
    }

    @Override
    public String getPassword() {
        if (user.isPresent()) {
            return user.get().getPassword();
        }
        else {
            throw new IllegalStateException("User is not present");
        }
    }

    @Override
    public String getUsername() {
        if (user.isPresent()) {
            return user.get().getLogin();
        }
        else {
            throw new IllegalStateException("User is not present");
        }
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
