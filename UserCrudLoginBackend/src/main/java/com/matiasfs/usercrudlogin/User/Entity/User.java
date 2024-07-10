package com.matiasfs.usercrudlogin.User.Entity;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.matiasfs.usercrudlogin.User.CustomAuthorityDeserializer;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"username"})})
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Column(nullable = false, unique = true)
    @NotBlank
    String username;

    @Column(nullable = false)
    @NotBlank
    String password;

    @Column(nullable = false, unique = true)
    @NotBlank
    @Email
    String email;

    @Column(nullable = false)
    @NotBlank
    String firstName;

    @Column(nullable = false)
    @NotBlank
    String lastName;

    @Column(nullable = false)
    @NotBlank
    String country;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    Role role;

    @JsonDeserialize(using = CustomAuthorityDeserializer.class)
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }
}
