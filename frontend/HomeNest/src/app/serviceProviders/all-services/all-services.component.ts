import { Component, OnInit } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Service } from '../../entity/services.model';
import { ServiceManagementService } from '../../servicemanagement.service';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { BookingService } from '../../booking.service';
import { Booking } from '../../entity/booking.model';
import { BookingStatus } from '../../entity/bookingStatus.model';
import { catchError, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-all-services',
  standalone: true,
  imports: [NgIf, NgFor,DatePipe], // Include CommonModule for Angular directives like ngFor and ngIf
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.css']
})
export class AllServicesComponent implements OnInit {
  services: Service[] = []; // Holds all the services created by the user
  providerId: number | null = null;
  constructor(
    private serviceManagementService: ServiceManagementService, 
    private authService: AuthService,private router : Router,
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    this.authService.user$.subscribe(data => {
      this.providerId = data?.id == null ? null : data.id;
    })
    if (this.providerId != null) {
      // Fetch services created by the logged-in user
      this.serviceManagementService.getServicesByProviderId(this.providerId).subscribe({
        next: (data: Service[]) => {
          this.services = data;
        },
        error: (err) => {
          console.error('Error fetching services:', err);
          alert("Error fetching services");
        }
      });
    }
  }

  onUpdate(serviceId: number) {
    this.checkPendingOrders(serviceId).subscribe({
      next: (hasPendingOrders) => {
        if (hasPendingOrders) {
          alert("There are pending orders for this service. Updates are only possible after the orders are completed.");
          return;
        }
        this.router.navigate(['service-update-form'], { queryParams: { serviceId } });
      },
      error: (err) => {
        console.log(err);
        alert("Error while checking orders");
      }
    });
  }  

  onDelete(serviceId: number) {
    this.checkPendingOrders(serviceId).subscribe({
      next: (hasPendingOrders) => {
        if (hasPendingOrders) {
          alert("There are pending orders for this service. Deletion is only possible after the orders are completed.");
          return;
        }
  
        const decision = confirm("Do you want to delete this service?");
        if (decision) {
          this.serviceManagementService.deleteService(serviceId).subscribe({
            next: () => {
              alert("Service deleted successfully");
              window.location.reload();
            },
            error: (err) => {
              console.log(err);
              alert("Error while deleting the service");
            }
          });
        }
      },
      error: (err) => {
        console.log(err);
        alert("Error while checking orders");
      }
    });
  }
  

  checkPendingOrders(serviceId: number): Observable<boolean> {
    return this.bookingService.getBookingsByServiceId(serviceId).pipe(
      map((bookings: Booking[]) => {
        // Check if any booking has a status of ACCEPTED or PENDING
        return bookings.some(booking => 
          booking.status === BookingStatus.ACCEPTED || booking.status === BookingStatus.PENDING
        );
      }),
      catchError((err) => {
        console.log(err);
        alert("Error while checking orders");
        return of(false); // In case of error, assume there are pending orders to prevent deletion
      })
    );
  }
  
}
