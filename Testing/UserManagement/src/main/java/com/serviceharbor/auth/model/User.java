package com.serviceharbor.auth.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.aspectj.weaver.ast.Not;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "FIRST_NAME", nullable = false)
    private String firstName;

    @Column(name = "LAST_NAME")
    private String lastName;

    @Column(name = "Email", nullable = false, unique = true)
    private String email;

    @Column(name = "Password", nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name = "Role")
    private Role role;

    @CreationTimestamp
    @Column(name = "CreatedAt")
    private Timestamp createdAt;

    @UpdateTimestamp
    @Column(name = "UpdatedAt")
    private Timestamp updatedAt;

    @Column(name = "PHONE_NO")
    private String phoneNo;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name =  "userId_fk", referencedColumnName ="id")
    private Set<Notification> notifications= new HashSet<>();

    // Getters and Setters

    public User (){

    }


    public User(int id, String firstName, String lastName, String email, String password, String phoneNo, Timestamp updatedAt, Timestamp createdAt, Role role) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNo = phoneNo;
        this.updatedAt = updatedAt;
        this.createdAt = createdAt;
        this.role = role;
    }
}

