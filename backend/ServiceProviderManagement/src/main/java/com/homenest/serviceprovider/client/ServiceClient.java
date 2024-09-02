package com.homenest.serviceprovider.client;


import com.homenest.serviceprovider.model.UserResponseDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "service-management-service", url = "http://localhost:9999")
public interface ServiceClient {

//    @GetMapping("/by-email/{email}")
//    UserResponseDto getUserByEmail(@PathVariable("email") String email);


    @GetMapping("/by-email/{email}")
    UserResponseDto getUserByEmail(@PathVariable("email") String email);
}
