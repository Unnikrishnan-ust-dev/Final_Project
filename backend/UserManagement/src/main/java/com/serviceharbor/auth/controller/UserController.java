package com.serviceharbor.auth.controller;


import com.serviceharbor.auth.model.User;
import com.serviceharbor.auth.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        User newUser = userService.registerUser(user);
        return ResponseEntity.ok(newUser);
    }

    @PostMapping("/login")
    public ResponseEntity<User> loginUser(@RequestParam String email, @RequestParam String password) {
        User user = userService.authenticateUser(email, password);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(401).build(); // Unauthorized
        }
    }

    @GetMapping("/profile")
    public ResponseEntity<User> getProfileByRoleAndUsername(@RequestParam String role, @RequestParam String username) {
        User user = userService.getUserByRoleAndUsername(role, username);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    // Other endpoints related to user management
}
