package com.homenest.serviceprovider.service;

import com.homenest.serviceprovider.model.ServiceEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.homenest.serviceprovider.repository.ServiceRepository;
import java.util.List;

@Service
public class ServiceModelService {
    @Autowired
    private ServiceRepository serviceRepository;

    public ServiceEntity  addService(ServiceEntity service) {
        return serviceRepository.save(service);
    }

    public ServiceEntity  updateService(ServiceEntity service) {
        if(serviceRepository.existsById(service.getId())) {
            return serviceRepository.save(service);
        } else {
            return null;
        }
    }

    public ServiceEntity  deleteService(long id) {
        if(serviceRepository.existsById(id)) {
            ServiceEntity service = serviceRepository.findById(id).get();
            serviceRepository.deleteById(id);
            return service;
        } else {
            return null;
        }
    }

    public ServiceEntity  getServiceById(long id) {
        return serviceRepository.findById(id).orElse(null);
    }

    public List<ServiceEntity> getAllServices() {
        return serviceRepository.findAll();
    }

    public List<ServiceEntity> getAllServiceByProviderId(long providerId) {
        return serviceRepository.findAllByProviderId(providerId);
    }

    public List<ServiceEntity> getAllServiceByCategory(String  category) {
        return serviceRepository.findAllByCategory(category);
    }

}
