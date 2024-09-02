package com.serviceharbor.auth.configs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfiguration {

    private final AuthenticationProvider authenticationProvider;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Autowired
    public SecurityConfiguration(
            JwtAuthenticationFilter jwtAuthenticationFilter,
            AuthenticationProvider authenticationProvider
    ) {
        this.authenticationProvider = authenticationProvider;
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        // Open endpoints
                        .requestMatchers("/auth/**").permitAll()
                        .requestMatchers("/swagger-ui/**", "/v3/api-docs/**", "/by-email/**").permitAll()
                        .requestMatchers("/**").permitAll()

                        // Booking endpoints
                        .requestMatchers("/booking/createBooking").hasRole("USER")
                        .requestMatchers("/booking/getBooking/**").hasAnyRole("USER", "ADMIN")
                        .requestMatchers("/booking/getAll").hasRole("ADMIN")
                        .requestMatchers("/booking/deleteBooking/**").hasRole("USER")
                        .requestMatchers("/booking/updateBooking/**/status").hasAnyRole("USER", "ADMIN")

                        // Payment endpoints
                        .requestMatchers("/payments/**").hasRole("USER")
//                        .requestMatchers("/payments/getPaymentById/**").hasRole("USER")
//                        .requestMatchers("/payments/getPaymentsByUserId/**").hasRole("USER")

                        // Review endpoints
                        .requestMatchers("/reviews/**").hasRole("USER")
//                        .requestMatchers("/reviews/updateReview/**").hasRole("USER")
//                        .requestMatchers("/reviews/deleteReview/**").hasRole("USER")
//                        .requestMatchers("/reviews/getReview/**").hasAnyRole("USER", "ADMIN")
//                        .requestMatchers("/reviews/getAllReviews").hasAnyRole("USER", "ADMIN")

                        // User endpoints
                        .requestMatchers("/getUser").authenticated()
                        .requestMatchers("/getAllUsers").hasRole("ADMIN")
                        .requestMatchers("/getUserByRoleAndEmail").hasAnyRole("USER", "ADMIN")

                        // Notification endpoints
                        .requestMatchers("/notifications/**").hasAnyRole("USER","SERVICE_PROVIDER")


                        // Service provider endpoints
                        .requestMatchers("/services/**").hasAnyRole("USER","SERVICE_PROVIDER")
//

                        .requestMatchers("/service-provider/**").hasAnyRole("USER", "SERVICE_PROVIDER")
//
                )
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}

