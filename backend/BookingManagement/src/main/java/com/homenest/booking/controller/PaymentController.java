package com.homenest.booking.controller;



import com.homenest.booking.model.Payment;
import com.homenest.booking.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/payments")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/initiatePayment")
    public ResponseEntity<Payment> createPayment(@RequestBody Payment payment, @RequestParam String userEmail) {
        Payment createdPayment = paymentService.createPayment(payment, userEmail);
        return ResponseEntity.ok(createdPayment);
    }

    @GetMapping("getPayment/{id}")
    public ResponseEntity<Payment> getPaymentById(@PathVariable Long id) {
        Optional<Payment> payment = paymentService.getPaymentById(id);
        return payment.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }


    @GetMapping("/getPaymentById/{userId}")
    public List<Payment> getPaymentsByUserId(@PathVariable Long userId) {
        return paymentService.getPaymentsByUserId(userId);
    }


}
