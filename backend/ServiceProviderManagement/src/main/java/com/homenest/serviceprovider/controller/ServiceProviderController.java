package com.homenest.serviceprovider.controller;

import com.homenest.serviceprovider.model.ServiceProviderEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.homenest.serviceprovider.service.ServiceProviderService;

import java.util.List;

@RestController
@RequestMapping("/service-provider")
public class ServiceProviderController {
    @Autowired
    private ServiceProviderService serviceProviderService;

//    get the service provider using service provider table id
    @GetMapping("/get-service-provider/{id}")
    public ResponseEntity<ServiceProviderEntity> getServiceProviderById(@PathVariable long id) {
        ServiceProviderEntity serviceProvider = serviceProviderService.getServiceProviderById(id);
        if(serviceProvider != null) {
            return ResponseEntity.ok(serviceProvider);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/get-all-service-providers")
    public ResponseEntity<List<ServiceProviderEntity>> getAllServiceProvider() {
        return ResponseEntity.ok(serviceProviderService.getAllServiceProvider());
    }

    @GetMapping("/get-all-service-providers-by-govt-id-verified/{status}")
    public ResponseEntity<List<ServiceProviderEntity>> getAllServiceProviderByGovtIdVerified(@PathVariable boolean status) {
        return ResponseEntity.ok(serviceProviderService.getAllServiceProviderByGovtIdVerified(status));
    }

    @GetMapping("/get-service-provider-by-user-id/{id}")
    public ResponseEntity<ServiceProviderEntity> getServiceProviderByUserId(@PathVariable long id) {
        ServiceProviderEntity serviceProvider = serviceProviderService.getServiceProviderByUserId(id);
        if(serviceProvider != null) {
            return ResponseEntity.ok(serviceProvider);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

//    method to create service provider
    @PostMapping("/create-service-provider")
    public ResponseEntity<ServiceProviderEntity> createServiceProvider(@RequestBody ServiceProviderEntity serviceProvider, @RequestParam String userEmail) {
        ServiceProviderEntity createdServiceProvider = serviceProviderService.createServiceProvider(serviceProvider, userEmail);
        if(createdServiceProvider != null) {
            return ResponseEntity.ok(createdServiceProvider);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/update-service-provider/{id}")
    public ResponseEntity<ServiceProviderEntity> updateServiceProvider(@PathVariable  long id, @RequestBody ServiceProviderEntity serviceProvider) {
        ServiceProviderEntity updatedServiceProvider = serviceProviderService.updateServiceProvider(serviceProvider);
        if(updatedServiceProvider != null) {
            return ResponseEntity.ok(updatedServiceProvider);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete-service-provider/{id}")
    public ResponseEntity<ServiceProviderEntity> deleteServiceProviderById(@PathVariable long id) {
        ServiceProviderEntity deletedServiceProvider = serviceProviderService.deleteServiceProviderById(id);
        if(deletedServiceProvider != null) {
            return ResponseEntity.ok(deletedServiceProvider);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
