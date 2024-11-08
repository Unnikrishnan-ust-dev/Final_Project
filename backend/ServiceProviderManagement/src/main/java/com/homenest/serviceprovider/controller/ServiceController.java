package com.homenest.serviceprovider.controller;

import com.homenest.serviceprovider.model.ServiceEntity;
import com.homenest.serviceprovider.service.ServiceModelService;
import com.homenest.serviceprovider.service.ServiceProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/services")
public class ServiceController {

    @Autowired
    private ServiceModelService serviceModelService;

    @GetMapping("/get-all")
    public ResponseEntity<List<ServiceEntity>> getAllServices() {
        List<ServiceEntity> services = serviceModelService.getAllServices();
        return ResponseEntity.ok(services);
    }

    @GetMapping("/get-by-id/{id}")
    public ResponseEntity<ServiceEntity> getServiceById(@PathVariable int id) {
        ServiceEntity service = serviceModelService.getServiceById(id);
        return ResponseEntity.ok(service);
    }

    @GetMapping("/get-by-provider-id/{id}")
    public ResponseEntity<List<ServiceEntity>> getServicesByProviderId(@PathVariable int id) {
        List<ServiceEntity> service = serviceModelService.getAllServiceByProviderId(id);
        return ResponseEntity.ok(service);
    }

    @GetMapping("/get-by-category/{category}")
    public ResponseEntity<List<ServiceEntity>> getServiceByCategory(@PathVariable String category) {
        List<ServiceEntity> services = serviceModelService.getAllServiceByCategory(category);
        return ResponseEntity.ok(services);
    }

    @PostMapping("/add-service")
    public ResponseEntity<ServiceEntity> addService(@RequestBody ServiceEntity service, @RequestParam String userEmail) {
        ServiceEntity newService = serviceModelService.addService(service, userEmail);
        return ResponseEntity.ok(newService);
    }


    @PutMapping("/update-service")
    public ResponseEntity<ServiceEntity> updateService(@RequestBody  ServiceEntity service) {
        ServiceEntity updatedService = serviceModelService.updateService(service);
        return ResponseEntity.ok(updatedService);
    }

    @DeleteMapping("/delete-service/{id}")
    public ResponseEntity<String> deleteService(@PathVariable int id) {
        ServiceEntity service = serviceModelService.deleteService(id);
        if(service != null) {
            return ResponseEntity.ok("Service deleted successfully");
        } else {
            return ResponseEntity.badRequest().body("Service not found");
        }
    }
}
