package com.homenest.serviceprovider;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients

public class ServiceProviderManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServiceProviderManagementApplication.class, args);
    }

}
