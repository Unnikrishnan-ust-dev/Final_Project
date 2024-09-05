package com.homenest.booking.model;

import com.homenest.booking.model.BookingStatus;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


import java.sql.Timestamp;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "bookingDemo")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(name = "ServiceID", nullable = false)
    private Long serviceId;

    @Column(name = "UserID", nullable = false)
    private Long userId;

    @Column(name = "DateTime")
    private LocalDateTime dateTime;

    @Enumerated(EnumType.STRING)
    @Column(name = "Status", nullable = false)
    private BookingStatus status;

    @Column(name = "PaymentID")
    private Integer paymentId;

    @Column(name = "Latitude")
    private Double latitude;

    @Column(name = "Longitude")
    private Double longitude;

    @Column(name = "Address")
    private String address;

    @Column(name = "City")
    private String city;

    @Column(name = "PostalCode")
    private Integer postal;

    @Column(name = "CreatedAt", updatable = false)
    @CreationTimestamp
    private Timestamp createdAt;

    @Column(name = "UpdatedAt")
    @UpdateTimestamp
    private Timestamp updatedAt;
}
