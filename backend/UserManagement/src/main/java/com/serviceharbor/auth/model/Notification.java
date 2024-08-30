package com.serviceharbor.auth.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "notifications")
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    // @ManyToOne
//   @JoinColumn(name = "UserID", nullable = false)

//    @ManyToOne(fetch = FetchType.LAZY, optional = false)
//    @JoinColumn(name = "user_id", nullable = false)
//    private User user;

    @Column(name = "Message", nullable = false, columnDefinition = "TEXT")
    private String message;

    @Enumerated(EnumType.STRING)
    @Column(name = "Status")
    private Status status;

    @CreationTimestamp
    @Column(name = "Timestamp")
    private Timestamp timestamp;

    public Notification(Integer id, String message, Status status, Timestamp timestamp) {
        this.id = id;
       // this.user = user;
        this.message = message;
        this.status = status;
        this.timestamp = timestamp;

    }

    public Notification() {

    }


    // Getters and setters

    public enum Status {
        UNREAD, READ;

    }
}





