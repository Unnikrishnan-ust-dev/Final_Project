
package com.homenest.booking.repository;



import com.homenest.booking.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer> {
    // Custom query methods can be defined here if needed
}
