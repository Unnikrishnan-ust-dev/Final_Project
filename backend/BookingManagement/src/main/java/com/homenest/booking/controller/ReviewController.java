package com.homenest.booking.controller;



import com.homenest.booking.model.Review;
import com.homenest.booking.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
@RestController
@RequestMapping("user/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping
    public ResponseEntity<Review> addReview(@RequestBody Review review) {
        Review createdReview = reviewService.addReview(review);
        return ResponseEntity.ok(createdReview);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Review> updateReview(@PathVariable Integer id, @RequestBody Review reviewDetails) {
        try {
            Review updatedReview = reviewService.updateReview(id, reviewDetails);
            return ResponseEntity.ok(updatedReview);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReview(@PathVariable Integer id) {
        try {
            reviewService.deleteReview(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Review> getReviewById(@PathVariable Integer id) {
        Optional<Review> review = reviewService.getReviewById(id);
        return review.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<Iterable<Review>> getAllReviews() {
        Iterable<Review> reviews = reviewService.getAllReviews();
        return ResponseEntity.ok(reviews);
    }
}
