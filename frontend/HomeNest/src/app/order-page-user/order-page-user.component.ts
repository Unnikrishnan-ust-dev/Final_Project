import { Component, OnInit } from '@angular/core';
 
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { BookingService } from '../booking.service';
import { AuthService } from '../auth.service';
import { User } from '../entity/userprofile.model';
 
 
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
  user: User|null = null;
  constructor(private orderService: BookingService,private authService: AuthService) { }
 
  ngOnInit(): void {
    this.user = this.authService.user;
    this.loadOrders();
  }
 
  loadOrders(): void {
    if(this.user!=null&&this.user.role=="USER"){
      this.orderService.getBookingsByUserId(this.user?.id).subscribe(data => {
        this.orders = data;
      });
    }else if(this.user!=null&&this.user.role=="SERVICE_PROVIDER"){
      this.orderService.getBookingsByProviderUserId(this.user?.id).subscribe(data => {
        this.orders = data;
      });
    }
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