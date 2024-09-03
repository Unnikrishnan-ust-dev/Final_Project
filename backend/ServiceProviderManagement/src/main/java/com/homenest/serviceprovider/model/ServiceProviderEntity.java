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

    @Column(name = "UserID")
    private Long userId;

    @Column(name = "Rating")
    private double rating = 0;

    @Column(name = "Location", length = 255)
    private String location;

    @CreationTimestamp
    @Column(name = "CreatedAt", updatable = false)
    private Timestamp createdAt;

    @UpdateTimestamp
    @Column(name = "UpdatedAt")
    private Timestamp updatedAt;

    @Column(name = "GOVT_ID", length = 50)
    private String govtId;

    @Column(name = "BANK_ACC_NO",  length = 50)
    private String bankAccountNumber;

    @Column(name = "IFSC_CODE",  length = 50)
    private String ifscCode;

    @Column(name = "BANK_NAME",  length = 50)
    private String bankName;

    @Column(name = "GOVT_ID_VERIFIED",  length = 50)
    private boolean govtIdVerified;

}
