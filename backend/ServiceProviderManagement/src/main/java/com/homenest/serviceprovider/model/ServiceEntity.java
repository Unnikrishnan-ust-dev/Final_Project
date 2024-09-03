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

  @Column(name = "Name", length = 100)
  private String name;

  @Column(name = "Location")
  private String location;


  @Column(name = "Category", length = 100)
  private String category;

  @Column(name = "Description")
  private String description;

  @Column(name = "Price")
  private double price;

  @Column(name = "ProviderID")
  private Long providerId;

  @CreationTimestamp
  @Column(name = "CreatedAt")
  private Timestamp createdAt;

  @UpdateTimestamp
  @Column(name = "UpdatedAt")
  private Timestamp updatedAt;
}
