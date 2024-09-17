package com.homenest.booking.service;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.Base64;

@Service
public class RazorPayService {

    private final String razorpayKey = "rzp_test_eKuUGv7I2WEARY";
    private final String razorpaySecret = "kXm0TBh7bDcnvrC0TjOfMYDE";

    public String getPaymentLinkDetails(String paymentLinkId) {
        // The Razorpay API URL
        String url = "https://api.razorpay.com/v1/payment_links/" + paymentLinkId;

        // Create headers and set the Authorization header
        HttpHeaders headers = new HttpHeaders();
        headers.setBasicAuth(razorpayKey, razorpaySecret); // Automatically encodes credentials in Base64

        // Create an HttpEntity object with the headers
        HttpEntity<String> entity = new HttpEntity<>(headers);

        // Create RestTemplate object
        RestTemplate restTemplate = new RestTemplate();

        // Make the GET request and get the response
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);

        // Return the response body (JSON string)
        return response.getBody();
    }
}

