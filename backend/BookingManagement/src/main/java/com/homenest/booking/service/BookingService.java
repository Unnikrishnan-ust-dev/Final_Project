package com.homenest.booking.service;

import com.homenest.booking.client.UserClient;
import com.homenest.booking.model.Booking;
import com.homenest.booking.model.BookingStatus;
import com.homenest.booking.model.UserResponseDto;
import com.homenest.booking.repository.BookingRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;
@Service
public class BookingService {


    @Autowired
    private UserClient userClient;

    @Autowired
    private BookingRepository bookingRepository;

    @Transactional
    public Booking createBooking(Booking booking, String userEmail) {

        UserResponseDto userResponse = userClient.getUserByEmail(userEmail);

        System.out.println(userResponse);
        booking.setUserId(userResponse.getId());
        return bookingRepository.save(booking);
    }

    @Transactional
    public Optional<Booking> getBookingById(Long id) {
        return bookingRepository.findById(id);
    }

    @Transactional
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    @Transactional
    public void cancelBooking(Long id) {
        bookingRepository.deleteById(id);
    }

    @Transactional
    public Booking updateBookingStatus(Long id, BookingStatus newStatus) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        BookingStatus currentStatus = booking.getStatus();

        // Define valid transitions
        if (currentStatus == BookingStatus.PENDING &&
                (newStatus == BookingStatus.ACCEPTED || newStatus == BookingStatus.DECLINED|| newStatus == BookingStatus.CANCELLED)) {
            booking.setStatus(newStatus);
        } else if (currentStatus == BookingStatus.ACCEPTED && newStatus == BookingStatus.COMPLETED) {
            booking.setStatus(newStatus);
        } else {
            throw new IllegalArgumentException("Invalid status transition");
        }

        return bookingRepository.save(booking);
    }

    public List<Booking> getBookingsByUserId(long userId) {
        List<Booking> bookings = bookingRepository.findBookingsByUserId(userId);
        return bookings;
    }

    public List<Booking> getBookingsByProviderId(long userId) {
        List<Booking> bookings = bookingRepository.findBookingsByProviderUserId(userId);
        return bookings;
    }

    public List<Booking> getBookingsByServiceId(long serviceId) {
        return bookingRepository.findBookingsByServiceId(serviceId);
    }
}