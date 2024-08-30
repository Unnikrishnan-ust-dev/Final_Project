package com.serviceharbor.auth.controller;


import com.serviceharbor.auth.model.LoginRequest;
import com.serviceharbor.auth.model.User;
import com.serviceharbor.auth.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user-management/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        User newUser = userService.registerUser(user);
        return ResponseEntity.ok(newUser);
    }

    @PostMapping("/login")
    public ResponseEntity<User> loginUser(@RequestBody LoginRequest loginRequest) {
        User user = userService.authenticateUser(loginRequest);
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
