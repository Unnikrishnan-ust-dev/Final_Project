package com.serviceharbor.auth.service;


import com.serviceharbor.auth.dtos.UserResponseDto;
import com.serviceharbor.auth.model.Role;
import com.serviceharbor.auth.model.User;
import com.serviceharbor.auth.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User updateUser(Long id, UserResponseDto userDto) {
        Optional<User> optionalUser = userRepository.findById(id);
        if(optionalUser.isPresent()) {
            User user = optionalUser.get();
            // Only update allowed fields
            user.setFirstName(userDto.getFirstName());
            user.setLastName(userDto.getLastName());
            user.setEmail(userDto.getEmail());
            user.setPhoneNo(userDto.getPhoneNo());

            return userRepository.save(user);
        } else {
            throw new RuntimeException("User not found with id: " + id);
        }
    }

    public User getUserByRoleAndEmail(String role, String email) {
        Role userRole;
        try {
            userRole = Role.valueOf(role.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Invalid role: " + role);
        }
        return userRepository.findByRoleAndEmail(userRole, email);
    }
    public List<User> allUsers() {
        List<User> users = new ArrayList<>();

        userRepository.findAll().forEach(users::add);

        return users;
    }
    public UserResponseDto findByEmail(String email) {
        Optional<User> userOptional = userRepository.findByEmail(email);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            // Convert User entity to UserResponse DTO
            UserResponseDto userResponse = new UserResponseDto();
            userResponse.setId(user.getId());
            userResponse.setEmail(user.getEmail());
            userResponse.setFirstName(user.getFirstName());
            userResponse.setLastName(user.getLastName());
            return userResponse;
        } else {
            throw new RuntimeException("User not found with email: " + email);
        }
    }

    public User findById(long id) {
        return userRepository.findById(id).orElse(null);
    }
}
