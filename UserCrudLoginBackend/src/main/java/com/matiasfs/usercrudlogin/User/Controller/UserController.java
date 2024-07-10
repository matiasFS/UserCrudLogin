package com.matiasfs.usercrudlogin.User.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matiasfs.usercrudlogin.Jwt.JwtService;
import com.matiasfs.usercrudlogin.User.Entity.User;
import com.matiasfs.usercrudlogin.User.Repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    @CrossOrigin
    @PostMapping("/users")
    public User addUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable int id) {
        return ResponseEntity.ok(userRepository.findById(id).orElseThrow());
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable int id, @RequestBody User user) {
        User userToUpdate = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        userToUpdate.setUsername(user.getUsername());
        userToUpdate.setEmail(user.getEmail());
        userToUpdate.setFirstName(user.getFirstName());
        userToUpdate.setLastName(user.getLastName());
        userToUpdate.setCountry(user.getCountry());
        return ResponseEntity.ok(userRepository.save(userToUpdate));
    }

    @PutMapping("users/changePassword")
    public ResponseEntity<User> changePassword(@RequestHeader("Authorization") String token, @RequestBody PasswordChangeRequest passwordChangeRequest) {
        String username = jwtService.getUsernameFromToken(token.substring(7));
        User userToUpdate = userRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("User not found"));
        if (passwordEncoder.matches(passwordChangeRequest.getOldPassword(), userToUpdate.getPassword())) {
            userToUpdate.setPassword(passwordEncoder.encode(passwordChangeRequest.getNewPassword()));
        } else {
            throw new RuntimeException("Old password is incorrect");
        }

        return ResponseEntity.ok(userRepository.save(userToUpdate));
    }

    @PreAuthorize("hasAuthority('USER')")
    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable int id) {
        userRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
