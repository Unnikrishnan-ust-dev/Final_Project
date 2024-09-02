package com.serviceharbor.auth.controller;

import com.serviceharbor.auth.dtos.UserResponseDto;
import com.serviceharbor.auth.model.User;


import com.serviceharbor.auth.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@RequestMapping("/users")
@RestController
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/getUser")
    public ResponseEntity<User> authenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        User currentUser = (User) authentication.getPrincipal();

        return ResponseEntity.ok(currentUser);
    }

    @GetMapping("/getAllUsers")
    public ResponseEntity<List<User>> allUsers() {
        List <User> users = userService.allUsers();

        return ResponseEntity.ok(users);
    }

    @GetMapping("/getUserByRoleAndEmail")
    public ResponseEntity<User> getProfileByRoleAndEmail(
            @RequestParam String role, @RequestParam String email) {
        try {
            User user = userService.getUserByRoleAndEmail(role, email);
            if (user != null) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (IllegalArgumentException e) {
            // Log error and return bad request response
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping("/by-email/{email}")
    public ResponseEntity<UserResponseDto> getUserByEmail(@PathVariable String email) {
        UserResponseDto user = userService.findByEmail(email);
        return ResponseEntity.ok(user);
    }
}
