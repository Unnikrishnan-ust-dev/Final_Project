package com.homenest.booking.client;

import com.homenest.booking.model.UserResponseDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "user-management-service", url = "http://localhost:9999")
public interface UserClient {

//    @GetMapping("/by-email/{email}")
//    UserResponseDto getUserByEmail(@PathVariable("email") String email);


    @GetMapping("/by-email/{email}")
    UserResponseDto getUserByEmail(@PathVariable("email") String email);
}
