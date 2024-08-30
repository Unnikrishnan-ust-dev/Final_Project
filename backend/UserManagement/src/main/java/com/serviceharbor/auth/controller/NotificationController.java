package com.serviceharbor.auth.controller;


import com.serviceharbor.auth.model.Notification;
import com.serviceharbor.auth.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notifications")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

//    @PostMapping("/create")
//    public ResponseEntity<Notification> createNotification(@RequestParam Integer userId, @RequestParam String message) {
//        Notification newNotification = notificationService.createNotification(userId, message);
//        return ResponseEntity.ok(newNotification);
//    }
    @PostMapping("/create")
    public ResponseEntity<Notification> createNotification(@RequestParam Integer userId, @RequestParam String message) {
        Notification newNotification = notificationService.createNotification(userId, message);
        return ResponseEntity.ok(newNotification);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Notification> getNotificationById(@PathVariable Integer id) {
        Notification notification = notificationService.getNotificationById(id);
        if (notification != null) {
            return ResponseEntity.ok(notification);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

//    @PutMapping("/update/{id}")
//    public ResponseEntity<Notification> updateNotification(@PathVariable Integer id, @RequestBody Notification notification) {
//        Notification updatedNotification = notificationService.updateNotification(id, notification);
//        if (updatedNotification != null) {
//            return ResponseEntity.ok(updatedNotification);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteNotification(@PathVariable Integer id) {
        boolean isDeleted = notificationService.deleteNotification(id);
        if (isDeleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Notification>> getNotificationsByUserId(@PathVariable Integer userId) {
        List<Notification> notifications = notificationService.getNotificationsByUserId(userId);
        return ResponseEntity.ok(notifications);
    }
}