package com.serviceharbor.auth.service;


import com.serviceharbor.auth.model.LoginRequest;
import com.serviceharbor.auth.model.User;
import com.serviceharbor.auth.repository.UserRepository;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        return userRepository.save(user);
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User authenticateUser(LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();
        User user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) { // Password check should be hashed in a real application
            return user;
        }
        return null;
    }

    public User getUserByRoleAndUsername(String role, String username) {
        // Assuming username is the email here for simplicity
        User user = userRepository.findByEmail(username);
        if (user != null && user.getRole().name().equalsIgnoreCase(role)) {
            return user;
        }
        return null;
    }

    // Other user-related methods
}
