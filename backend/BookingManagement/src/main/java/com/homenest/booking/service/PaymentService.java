package com.homenest.booking.service;



import com.homenest.booking.model.Payment;
import com.homenest.booking.repository.PaymentRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.Optional;
@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Transactional
    public Payment createPayment(Payment payment) {
        payment.setCreatedAt(LocalDateTime.now());
        payment.setUpdatedAt(LocalDateTime.now());
        return paymentRepository.save(payment);
    }

    @Transactional
    public Optional<Payment> getPaymentById(Integer id) {
        return paymentRepository.findById(id);
    }

    @Transactional
    public Payment updatePayment(Payment payment) {
        payment.setUpdatedAt(LocalDateTime.now());
        return paymentRepository.save(payment);
    }

    @Transactional
    public void deletePayment(Integer id) {
        paymentRepository.deleteById(id);
    }
}
