package com.quickbox.controller;

import com.quickbox.model.User;
import com.quickbox.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        Map<String, String> response = new HashMap<>();
        if (userService.findByEmail(user.getEmail()).isPresent()) {
            response.put("message", "Email already in use");
            return ResponseEntity.badRequest().body(response);
        }
        userService.registerUser(user);
        response.put("message", "User registered successfully");
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        Map<String, String> response = new HashMap<>();
        Optional<User> existingUser = userService.findByEmail(user.getEmail());
        if (existingUser.isPresent() && userService.checkPassword(existingUser.get(), user.getPassword())) {
            response.put("message", "Login successful");
            return ResponseEntity.ok(response);
        } else {
            response.put("message", "Invalid email or password");
            return ResponseEntity.status(401).body(response);
        }
    }
}
