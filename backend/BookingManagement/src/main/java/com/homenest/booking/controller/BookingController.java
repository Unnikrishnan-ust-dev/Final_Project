package com.homenest.booking.controller;

import com.homenest.booking.model.Booking;
import com.homenest.booking.model.BookingStatus;
import com.homenest.booking.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    // Create a new booking
    @PostMapping("/createBooking")
    public ResponseEntity<Booking> createBooking(@RequestBody Booking booking, @RequestParam String userEmail) {
        Booking createdBooking = bookingService.createBooking(booking, userEmail);
        return ResponseEntity.ok(createdBooking);
    }
    // Get a booking by its ID
    @GetMapping("/getBooking/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Long id) {
        Optional<Booking> booking = bookingService.getBookingById(id);
        return booking.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/get-all-orders-by-user-id/{id}")
    public ResponseEntity<List<Booking>> getBookingsByUserId(@PathVariable long id){
        List<Booking> bookings = bookingService.getBookingsByUserId(id);
        return ResponseEntity.ok(bookings);
    }

    @GetMapping("/get-all-orders-by-provider-id/{id}")
    public ResponseEntity<List<Booking>> getBookingsByProviderId(@PathVariable long id){
        List<Booking> bookings = bookingService.getBookingsByProviderId(id);
        return ResponseEntity.ok(bookings);
    }

    // Get all bookings (Admin only)
    @GetMapping("/getAll")
    public ResponseEntity<List<Booking>> getAllBookings() {
        List<Booking> bookings = bookingService.getAllBookings();
        return ResponseEntity.ok(bookings);
    }

    // Cancel a booking
    @DeleteMapping("/deleteBooking/{id}")
    public ResponseEntity<Void> cancelBooking(@PathVariable Long id) {
        bookingService.cancelBooking(id);
        return ResponseEntity.noContent().build();
    }

    // Update booking status
    @PutMapping("/updateBooking/{id}/status")
    public ResponseEntity<Booking> updateBookingStatus(@PathVariable Long id, @RequestParam BookingStatus status) {
        try {
            Booking updatedBooking = bookingService.updateBookingStatus(id, status);
            return ResponseEntity.ok(updatedBooking);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}
