import { AfterViewInit, Component, ElementRef, OnInit, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { Booking } from '../entity/booking.model';
import { BookingStatus } from '../entity/bookingStatus.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  userEmail : string = "";

  handleSubmit() {
    console.log("handleSubmit");
    this.bookingService.createBooking(this.orderData,this.userEmail).subscribe({
      next:(data)=>{
        this.router.navigateByUrl("/order-success");
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
  locationButtonWidth: any = "100%";

  constructor(private route: ActivatedRoute,private bookingService: BookingService,private authService:AuthService,private router: Router) { }

  currentLocDiv = "none";
  serviceName: string | null = "";
  price: string | null = "";

  paymentCard = {
    cardNo : "",
    expiry: "",
    cvv: ""
  }

  orderData : Booking = {
    id: 0,
    serviceId: 0,
    userId: 0,
    dateTime: '',
    status: BookingStatus.PENDING,
    createdAt: '',
    updatedAt: '',
    latitude: 0,
    longitude: 0,
    address: "",
    city: "",
    postal: 0,
    providerUserId: 0
  };
  ngOnInit() {
    this.orderData.serviceId = Number.parseInt(this.route.snapshot.paramMap.get("id") ?? "0");
    this.route.queryParamMap.subscribe((params) => {
      this.serviceName = params.get("name");
      this.price = params.get("price");
      this.orderData.providerUserId = Number.parseInt(params.get("providerId")??"0");
    });

    this.authService.getAuthenticatedUser().subscribe(data=>{
      this.userEmail = data.email;
    })
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.orderData.latitude = position.coords.latitude;
          this.orderData.longitude = position.coords.longitude;
          this.locationButtonWidth = "50%";
          this.currentLocDiv = "block";
        },
        (error) => {
          console.error('Error getting location: ', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
}
