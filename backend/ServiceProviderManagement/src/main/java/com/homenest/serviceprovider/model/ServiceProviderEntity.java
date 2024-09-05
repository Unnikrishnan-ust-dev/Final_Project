package com.homenest.serviceprovider.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "service_providers")
public class ServiceProviderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "UserID")
    private Long userId;

    @Column(name = "Rating")
    private double rating = 0;

    @Column(name = "Location")
    private String location;

    @CreationTimestamp
    @Column(name = "CreatedAt", updatable = false)
    private Timestamp createdAt;

    @UpdateTimestamp
    @Column(name = "UpdatedAt")
    private Timestamp updatedAt;

    @Column(name= "username")
    private String username;

    @Column(name = "GOVT_ID")
    private String govtId;

    @Column(name = "BANK_ACC_NO")
    private String bankAccountNumber;

    @Column(name = "IFSC_CODE")
    private String ifscCode;

    @Column(name = "BANK_NAME")
    private String bankName;

    @Column(name = "GOVT_ID_VERIFIED")
    private boolean govtIdVerified;

    @Column(name = "IMAGE_URL")
    private String imageUrl;

    @Column(name = "skill")
    private String skills;

    @Column(name = "education")
    private String education;




}
