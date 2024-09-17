import { Component, OnInit } from '@angular/core';
 
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { BookingService } from '../booking.service';
import { AuthService } from '../auth.service';
import { User } from '../entity/userprofile.model';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BookingStatus } from '../entity/bookingStatus.model';
 
 
@Component({
  selector: 'app-orders',
  templateUrl: './order-page-user.component.html',
  imports:[FormsModule, NgFor, NgIf,FontAwesomeModule],
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
  showProviderModal: boolean = false;
  closeIcon: any = faClose;
  serviceProviderBasicProfile: User|null = null;

  constructor(private orderService: BookingService,private authService: AuthService) { }
 
  ngOnInit(): void {
    this.authService.user$.subscribe(user=>{
      this.user = user;
    })
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
      this.authService.getUserByUserId(data.providerUserId).subscribe((providerData) => {
        this.serviceProviderBasicProfile = providerData;
      })
    });
    
  }
 
  applyFilters(): void {
    // Apply filters to the orders list based on searchQuery, selectedLocation, etc.
    // This is a placeholder function, implement as needed
  }
 
  contactServiceProvider(): void {
    // Implement contact functionality
    this.showProviderModal = !this.showProviderModal;
  }
 
  cancelOrder(): void {
    // Implement cancel order functionality
    let confirmation = confirm("Do you really want to cancel your order?");
    if(confirmation){
      this.orderService.updateBookingStatus(this.selectedOrder.id,BookingStatus.CANCELLED).subscribe({
        next:(data)=>{
          console.log(data);
          alert("Order Canceled Successfully");
        },
        error:(err)=>{
          console.log(err);
          alert("Error cancelling order!")
        }
      })
    }
  }
}