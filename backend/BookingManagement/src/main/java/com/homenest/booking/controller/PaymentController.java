package com.homenest.booking.controller;



import com.homenest.booking.model.Payment;
import com.homenest.booking.service.PaymentService;
import com.homenest.booking.service.RazorPayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Base64;
import java.util.List;
import java.util.Map;
import java.util.Optional;
@RestController
@RequestMapping("/payments")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @Autowired
    private RazorPayService razorpayService;

    @GetMapping("/payment-link/{id}")
    public String getPaymentLink(@PathVariable String id) {
        return razorpayService.getPaymentLinkDetails(id);
    }

    @PostMapping("/create-link")
    public ResponseEntity<String> createPaymentLink(@RequestBody Map<String, Object> paymentPayload) {
        String razorpayKey = "rzp_test_eKuUGv7I2WEARY";
        String razorpaySecret = "kXm0TBh7bDcnvrC0TjOfMYDE";
        String auth = razorpayKey + ":" + razorpaySecret;
        String encodedAuth = Base64.getEncoder().encodeToString(auth.getBytes());

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Basic " + encodedAuth);
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(paymentPayload, headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.postForEntity("https://api.razorpay.com/v1/payment_links", request, String.class);

        return ResponseEntity.ok(response.getBody());
    }

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
