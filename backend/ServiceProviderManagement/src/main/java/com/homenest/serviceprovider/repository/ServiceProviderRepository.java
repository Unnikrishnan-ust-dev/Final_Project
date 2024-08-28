package com.homenest.serviceprovider.repository;

import com.homenest.serviceprovider.model.ServiceProviderEntity;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

@Repository
public interface ServiceProviderRepository extends JpaRepository<ServiceProviderEntity,Long>{
    ServiceProviderEntity findByUserId(long id);

    List<ServiceProviderEntity> findByGovtIdVerified(boolean status);
}