import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import { BookingService } from '../booking.service';
import { NotificationService } from '../notification.service';
import { User } from '../entity/userprofile.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-order-success',
  standalone: true,
  imports: [FontAwesomeModule,RouterLink],
  templateUrl: './order-success.component.html',
  styleUrl: './order-success.component.css'
})
export class OrderSuccessComponent implements OnInit{
  faCircle = faCheckCircle;
  queryParams : any = {};
  user: User|null = null;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private router: Router,
    private notificationService: NotificationService){}
  

  ngOnInit(): void {
    this.authService.getAuthenticatedUser().subscribe(data=>{
      this.user = data;
    })
    // Get all query params from the URL
    this.route.queryParams.subscribe(params => {
      this.queryParams = {
        razorpay_payment_id: params['razorpay_payment_id'],
        razorpay_payment_link_id: params['razorpay_payment_link_id'],
        razorpay_payment_link_reference_id: params['razorpay_payment_link_reference_id'],
        razorpay_payment_link_status: params['razorpay_payment_link_status'],
        razorpay_signature: params['razorpay_signature']
      };

    if(this.queryParams['razorpay_payment_link_status']=="paid"){
      this.bookingService.getPaymentInfo(this.queryParams['razorpay_payment_link_id']).subscribe({
        next: (paymentData)=>{
          this.bookingService.createBooking(paymentData['notes'],paymentData['customer']['email']).subscribe({
            next:(bookingData)=>{
              console.log(bookingData);
              if(this.user!=null){
                this.notificationService.createNotification(this.user?.id,"Congrats for successfully completing the order").subscribe({
                  next:(value)=>{
                    console.log(value);
                  },
                  error: (err)=>{
                    console.log(err);
                  }
                })
              }
            },
            error:(error)=>{
              console.log(error);
            }
          })
        },
        error: (err)=>{
          this.router.navigateByUrl("/");
          console.log(err);
        }
      })
    }else{
      this.router.navigateByUrl("/");
    }
    });
  }
}
