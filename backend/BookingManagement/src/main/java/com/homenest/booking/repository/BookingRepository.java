package com.homenest.booking.repository;


import com.homenest.booking.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findBookingsByUserId(Long userId);
    List<Booking> findBookingsByProviderUserId(Long userId);
}
