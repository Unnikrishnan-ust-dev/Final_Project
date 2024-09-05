import { Component, OnInit } from '@angular/core';
 
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { BookingService } from '../booking.service';
 
 
@Component({
  selector: 'app-orders',
  templateUrl: './order-page-user.component.html',
  imports:[FormsModule, NgFor, NgIf],
  standalone: true,
  styleUrls: ['./order-page-user.component.css']
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];
  selectedOrder: any;
  searchQuery: string = '';
  selectedLocation: string = '';
  selectedPaymentStatus: string = '';
  selectedOrderStatus: string = '';
 
  constructor(private orderService: BookingService) { }
 
  ngOnInit(): void {
    this.loadOrders();
  }
 
  loadOrders(): void {
    this.orderService.getAllBookings().subscribe(data => {
      this.orders = data;
      // Apply filters if needed
      this.applyFilters();
    });
  }
 
  selectOrder(orderId: number): void {
    this.orderService.getBookingById(orderId).subscribe(data => {
      this.selectedOrder = data;
    });
  }
 
  applyFilters(): void {
    // Apply filters to the orders list based on searchQuery, selectedLocation, etc.
    // This is a placeholder function, implement as needed
  }
 
  contactServiceProvider(): void {
    // Implement contact functionality
  }
 
  cancelOrder(): void {
    // Implement cancel order functionality
  }
}