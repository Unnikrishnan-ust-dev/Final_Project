package com.serviceharbor.auth.service;


import com.serviceharbor.auth.model.Notification;
import com.serviceharbor.auth.model.User;
import com.serviceharbor.auth.repository.NotificationRepository;
import com.serviceharbor.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    @Autowired
    private UserRepository userRepository;

    public Notification createNotification(Notification notification) {
        return notificationRepository.save(notification);
    }

    public Notification getNotificationById(Integer id) {
        return notificationRepository.findById(id).orElse(null);
    }

//    public Notification updateNotification(Integer id, Notification notification) {
//        if (notificationRepository.existsById(id)) {
//            notification.setId(id);
//            return notificationRepository.save(notification);
//        }
//        return null;
//    }

    public boolean deleteNotification(Integer id) {
        if (notificationRepository.existsById(id)) {
            notificationRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<Notification> getNotificationsByUserId(Integer userId) {
       // return notificationRepository.findByUserId(userId);
        return null;
    }

    public Notification createNotification(Integer userId, String message) {

        User user =userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        Notification notification = new Notification();
        notification.setMessage(message);
        notification.setStatus(Notification.Status.UNREAD);
        return notificationRepository.save(notification);
    }

}

///Create Pull Request
