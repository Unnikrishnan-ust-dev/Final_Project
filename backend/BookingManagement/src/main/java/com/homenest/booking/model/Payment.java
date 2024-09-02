package com.homenest.booking.model;

import com.homenest.booking.model.PaymentStatus;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


import java.math.BigDecimal;
import java.time.LocalDateTime;


@Setter
@Getter
@Entity
@Table(name = "paymentDemo")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "UserId")
    private  Long userId;

    @Column(name = "BookingID")
    private Integer bookingId;

    @Column(name = "Amount")
    private BigDecimal amount;

    @Enumerated(EnumType.STRING)
    @Column(name = "PaymentStatus")
    private PaymentStatus paymentStatus;

    @Column(name = "PaymentDate")
    private LocalDateTime paymentDate;

    @Column(name = "CreatedAt", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "UpdatedAt")
    private LocalDateTime updatedAt;

    
}
