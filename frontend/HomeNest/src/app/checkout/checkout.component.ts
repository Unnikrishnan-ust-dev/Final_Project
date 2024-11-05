import { AfterViewInit, Component, ElementRef, OnInit, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { Booking } from '../entity/booking.model';
import { BookingStatus } from '../entity/bookingStatus.model';
import { AuthService } from '../auth.service';
import { NotificationService } from '../notification.service';
import { User } from '../entity/userprofile.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  userEmail : string = "";
  user : User|null=null;
  locationButtonWidth: any = "100%";
  loaderState : string = "none";

  constructor(private route: ActivatedRoute,private bookingService: BookingService,private authService:AuthService,private notificationService: NotificationService) { };

  currentLocDiv = "none";
  serviceName: string | null = "";
  price: number  = 0;

  paymentPayload  = {
    amount: 1000,
    currency: "INR",
    reference_id: "",
    description: "",
    customer: {
      name: "",
      contact: "",
      email: ""
    },
    notify: {
      sms: true,
      email: true
    },
    reminder_enable: true,
    notes: {
    },
    callback_url: "http://localhost:4200/order-success",
    callback_method: "get"
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
      this.price = Number.parseInt(params.get("price")??"0");
      this.orderData.providerUserId = Number.parseInt(params.get("providerId")??"0");
    });

    this.authService.getAuthenticatedUser().subscribe(data=>{
      this.user = data;
      this.userEmail = data.email;
      this.paymentPayload.customer = {
        contact: data.phoneNo??"",
        email: data.email,
        name: data.firstName + data.lastName
      }
    })
  }

  showLoader() {
    this.loaderState = "flex";
  }
  
  hideLoader() {
    this.loaderState = "none";
  }
  

  handleSubmit() {
    if(this.orderData.address==""||this.orderData.postal==0||this.orderData.postal==null||this.orderData.city==""){
      alert("Fields are mandatory");
      return;
    }
    this.showLoader();
    this.paymentPayload.amount = this.price * 100;
    this.paymentPayload.reference_id = "TS"+this.getUniqueTransactionId();
    this.paymentPayload.description = "Payment for "+this.serviceName+" of "+this.price;
    this.paymentPayload.notes = {
      ...this.orderData
    }
    this.bookingService.createPaymentLink(this.paymentPayload).subscribe({
      next:(data)=>{
        this.hideLoader();
        console.log(data);
        if(this.user!=null){
          this.notificationService.createNotification(this.user?.id,"You started the purchase of "+this.serviceName+".Please complete the payment").subscribe({
            next:(value)=>{
              console.log(value);
            },
            error: (err)=>{
              console.log(err);
            }
          })
        }
        window.location.replace(data.short_url);
      },
      error:(err)=>{
        this.hideLoader();
        console.log(err);
      }
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

  getUniqueTransactionId(){
    let uid = Date.now().toString(36) + Math.floor(Math.pow(10, 6) + Math.random() * 9*Math.pow(10, 6)).toString(36);
    return uid;
  }
}
