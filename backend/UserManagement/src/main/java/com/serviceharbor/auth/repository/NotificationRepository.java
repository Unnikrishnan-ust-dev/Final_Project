package com.serviceharbor.auth.repository;


import com.serviceharbor.auth.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification, Integer> {
   // List<Notification> findByUserId(Integer userId);
}
