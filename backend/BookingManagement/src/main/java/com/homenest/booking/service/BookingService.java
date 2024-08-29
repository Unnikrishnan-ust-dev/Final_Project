package com.homenest.booking.service;


import com.homenest.booking.model.Booking;
import com.homenest.booking.repository.BookingRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Optional;
@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Transactional
    public Booking createBooking(Booking booking) {
//        booking.setCreatedAt(LocalDateTime.now());
//        booking.setUpdatedAt(LocalDateTime.now());
        return bookingRepository.save(booking);
    }

    @Transactional
    public Optional<Booking> getBookingById(Integer id) {
        return bookingRepository.findById(id);
    }

    @Transactional
    public Booking updateBooking(Booking booking) {
//        booking.setUpdatedAt(LocalDateTime.now());
        return bookingRepository.save(booking);
    }

    @Transactional
    public void deleteBooking(Integer id) {
        bookingRepository.deleteById(id);
    }
}
