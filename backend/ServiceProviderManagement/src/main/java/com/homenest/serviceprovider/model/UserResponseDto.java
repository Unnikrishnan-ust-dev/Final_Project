package com.homenest.serviceprovider.model;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDto {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

   // private List<Notification> notifications = new ArrayList<>();
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phoneNo;
    private String role;
   // private String phoneNo;// This could be an enum or a string, depending on your implementation

}
