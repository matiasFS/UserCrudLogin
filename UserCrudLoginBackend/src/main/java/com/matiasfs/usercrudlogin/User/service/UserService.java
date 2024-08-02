package com.matiasfs.usercrudlogin.User.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.matiasfs.usercrudlogin.User.Entity.User;
import com.matiasfs.usercrudlogin.User.Repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService implements IUserService {


    @Autowired
    @Qualifier("userRepository")
    private UserRepository userRepository;

    @Autowired
    @Qualifier("passwordEncoder")
    private final PasswordEncoder passwordEncoder;

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User findById(int id) {
        return userRepository.findById(id).orElseThrow();
    }

    @Override
    public User update(int id, User user) {
        User userToUpdate = findById(id);
        userToUpdate.setUsername(user.getUsername());
        userToUpdate.setEmail(user.getEmail());
        userToUpdate.setFirstName(user.getFirstName());
        userToUpdate.setLastName(user.getLastName());
        userToUpdate.setCountry(user.getCountry());
        userToUpdate.setRole(user.getRole());
        return userRepository.save(userToUpdate);
    }

    @Override
    public User save(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public void delete(int id) {
        userRepository.deleteById(id);
    }

    @Override
    public User findByUsername(String username) {
        User userToFind = userRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("User not found"));
        return userToFind;
    }

    @Override
    public User findByEmail(String email) {
        User userToFind = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        return userToFind;
    }

    @Override
    public User changePassword(String username, String oldPassword, String newPassword) {
        User userToUpdate = findByUsername(username);
        if (passwordEncoder.matches(oldPassword, userToUpdate.getPassword())) {
            userToUpdate.setPassword(passwordEncoder.encode(newPassword));
        } else {
            throw new RuntimeException("Old password is incorrect");
        }
        return userToUpdate;
    }

}
