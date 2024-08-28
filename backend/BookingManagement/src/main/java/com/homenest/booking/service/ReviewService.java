package com.homenest.booking.service;


import com.homenest.booking.model.Review;
import com.homenest.booking.repository.ReviewRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.Optional;
@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Transactional
    public Review addReview(Review review) {
        // Additional business logic can be added here
        review.setCreatedAt(LocalDateTime.now());
        review.setUpdatedAt(LocalDateTime.now());
        return reviewRepository.save(review);
    }

    @Transactional
    public Review updateReview(Integer id, Review reviewDetails) {
        Optional<Review> optionalReview = reviewRepository.findById(id);
        if (optionalReview.isPresent()) {
            Review review = optionalReview.get();
            review.setBookingId(reviewDetails.getBookingId());
            review.setRating(reviewDetails.getRating());
            review.setComment(reviewDetails.getComment());
            review.setUserId(reviewDetails.getUserId());
            review.setTimestamp(reviewDetails.getTimestamp());
            review.setServiceProviderId(reviewDetails.getServiceProviderId());
            review.setUpdatedAt(LocalDateTime.now());
            return reviewRepository.save(review);
        } else {
            throw new RuntimeException("Review not found with id " + id);
        }
    }

    @Transactional
    public void deleteReview(Integer id) {
        reviewRepository.deleteById(id);
    }

    public Optional<Review> getReviewById(Integer id) {
        return reviewRepository.findById(id);
    }

    public Iterable<Review> getAllReviews() {
        return reviewRepository.findAll();
    }
}
