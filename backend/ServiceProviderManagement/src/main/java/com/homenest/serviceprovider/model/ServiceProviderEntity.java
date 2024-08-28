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

    @Column(name = "UserID", nullable = false)
    private Long userId;

    @Column(name = "Rating", nullable = false)
    private double rating = 0;

    @Column(name = "Location", nullable = false, length = 255)
    private String location;

    @CreationTimestamp
    @Column(name = "CreatedAt", updatable = false)
    private Timestamp createdAt;

    @UpdateTimestamp
    @Column(name = "UpdatedAt")
    private Timestamp updatedAt;

    @Column(name = "GOVT_ID", nullable = false, length = 50)
    private String govtId;

    @Column(name = "BANK_ACC_NO", nullable = false, length = 50)
    private String bankAccountNumber;

    @Column(name = "IFSC_CODE", nullable = false, length = 50)
    private String ifscCode;

    @Column(name = "BANK_NAME", nullable = false, length = 50)
    private String bankName;

    @Column(name = "GOVT_ID_VERIFIED", nullable = false, length = 50)
    private boolean govtIdVerified;

}
