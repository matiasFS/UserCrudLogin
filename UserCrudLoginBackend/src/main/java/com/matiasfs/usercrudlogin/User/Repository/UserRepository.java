package com.matiasfs.usercrudlogin.User.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.matiasfs.usercrudlogin.User.Entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
}
