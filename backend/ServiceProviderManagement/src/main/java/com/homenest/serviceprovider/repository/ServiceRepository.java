package com.homenest.serviceprovider.repository;

import com.homenest.serviceprovider.model.ServiceEntity;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

@Repository
public interface ServiceRepository extends JpaRepository<ServiceEntity, Long> {
    List<ServiceEntity> findAllByProviderId(long providerId);

    List<ServiceEntity> findAllByCategory(String category);
}
