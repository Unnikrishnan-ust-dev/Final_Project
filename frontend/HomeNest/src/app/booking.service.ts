import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './entity/booking.model';
import { BookingStatus } from './entity/bookingStatus.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = 'http://localhost:9999/booking';

  constructor(private http: HttpClient) { }

  // Create a new booking
  createBooking(booking: Booking, userEmail: string): Observable<Booking> {
    const url = `${this.baseUrl}/createBooking`;
    return this.http.post<Booking>(url, booking, { params: { userEmail } });
  }

  // Get a booking by its ID
  getBookingById(id: number): Observable<Booking> {
    const url = `${this.baseUrl}/getBooking/${id}`;
    return this.http.get<Booking>(url);
  }

  // Get all bookings (Admin only)
  getAllBookings(): Observable<Booking[]> {
    const url = `${this.baseUrl}/getAll`;
    return this.http.get<Booking[]>(url);
  }

  // Get all bookings by user id
  getBookingsByUserId(userId: number): Observable<Booking[]> {
    const url = `${this.baseUrl}/get-all-orders-by-user-id/${userId}`;
    return this.http.get<Booking[]>(url);
  }

  // Get all bookings by provider user id
  getBookingsByProviderUserId(userId: number): Observable<Booking[]> {
    const url = `${this.baseUrl}/get-all-orders-by-provider-id/${userId}`;
    return this.http.get<Booking[]>(url);
  }

  // Cancel a booking
  cancelBooking(id: number): Observable<void> {
    const url = `${this.baseUrl}/deleteBooking/${id}`;
    return this.http.delete<void>(url);
  }

  // Update booking status
  updateBookingStatus(id: number, status: BookingStatus): Observable<Booking> {
    const url = `${this.baseUrl}/updateBooking/${id}/status`;
    return this.http.put<Booking>(url, null, { params: { status: status.toString() } });
  }
}
