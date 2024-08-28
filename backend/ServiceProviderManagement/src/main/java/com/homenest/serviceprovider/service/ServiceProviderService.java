package com.homenest.serviceprovider.service;

import com.homenest.serviceprovider.model.ServiceProviderEntity;
import com.homenest.serviceprovider.repository.ServiceProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceProviderService {
    @Autowired
    private ServiceProviderRepository serviceProviderRepository;

    public ServiceProviderEntity createServiceProvider(ServiceProviderEntity serviceProvider) {
        return serviceProviderRepository.save(serviceProvider);
    }

    public ServiceProviderEntity updateServiceProvider(ServiceProviderEntity serviceProvider) {
        if(serviceProviderRepository.existsById(serviceProvider.getId())) {
            return serviceProviderRepository.save(serviceProvider);
        } else {
            return null;
        }
    }

    public ServiceProviderEntity getServiceProviderById(long id) {
        return serviceProviderRepository.findById(id).orElse(null);
    }

    public ServiceProviderEntity getServiceProviderByUserId(long id) {
        return serviceProviderRepository.findByUserId(id);
    }

    public ServiceProviderEntity deleteServiceProviderById(long id) {
        if(serviceProviderRepository.existsById(id)) {
            ServiceProviderEntity serviceProvider = serviceProviderRepository.findById(id).get();
            serviceProviderRepository.deleteById(id);
            return serviceProvider;
        } else {
            return null;
        }
    }

    public List<ServiceProviderEntity> getAllServiceProvider() {
        return serviceProviderRepository.findAll();
    }

    public List<ServiceProviderEntity> getAllServiceProviderByGovtIdVerified(boolean status){
        return serviceProviderRepository.findByGovtIdVerified(status);
    }
}
