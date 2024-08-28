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

@Entity
@Data
@Table(name = "services")
@AllArgsConstructor
@NoArgsConstructor
public class ServiceEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "ID")
  private Long id;

  @Column(name = "Name", nullable = false, length = 100)
  private String name;

  @Column(name = "Category", nullable = false, length = 100)
  private String category;

  @Column(name = "Description")
  private String description;

  @Column(name = "Price", nullable = false)
  private double price;

  @Column(name = "ProviderID", nullable = false)
  private Long providerId;

  @CreationTimestamp
  @Column(name = "CreatedAt",updatable = false)
  private Timestamp createdAt;

  @UpdateTimestamp
  @Column(name = "UpdatedAt")
  private Timestamp updatedAt;
}
