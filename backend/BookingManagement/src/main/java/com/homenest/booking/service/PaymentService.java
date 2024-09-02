package com.homenest.booking.service;



import com.homenest.booking.client.UserClient;
import com.homenest.booking.model.Payment;
import com.homenest.booking.model.UserResponseDto;
import com.homenest.booking.repository.PaymentRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
@Service
public class PaymentService {


    @Autowired
    private UserClient userClient;

    @Autowired
    private PaymentRepository paymentRepository;

    @Transactional
    public Payment createPayment(Payment payment,  String userEmail) {

        UserResponseDto userResponse = userClient.getUserByEmail(userEmail);

        System.out.println(userResponse);
        payment.setUserId(userResponse.getId());

        payment.setCreatedAt(LocalDateTime.now());
        payment.setUpdatedAt(LocalDateTime.now());
        return paymentRepository.save(payment);
    }

    @Transactional
    public Optional<Payment> getPaymentById(Long id) {
        return paymentRepository.findById(id);
    }

    @Transactional
    public List<Payment> getPaymentsByUserId(Long userId) {
        return paymentRepository.findByUserId(userId);
    }

}
