package com.homenest.booking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class BookingManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(BookingManagementApplication.class, args);
    }

}
