import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Notification } from '../../entity/notification.model';
import { NotificationService } from '../../notification.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NgFor,FontAwesomeModule,NgIf],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent implements OnInit{
  closeModal() {
    this.showModal = false;
    this.modalEvent.emit(this.showModal);
  }
  @Input() showModal:boolean = true;
  @Output() modalEvent : EventEmitter<boolean> = new EventEmitter();

  closeIcon : any = faClose;

  notifications : Notification[]  = [];

  constructor(private notificationService: NotificationService,private authService: AuthService){}
  ngOnInit(): void {
    this.authService.user$.subscribe(data=>{
      data!=null?this.notificationService.getNotificationsByUserId(data?.id).subscribe({
        next: (notifications)=>{
          this.notifications = notifications;
        },
        error: (err)=>{
          console.log(err);
        }
      }) : console.log(data);
    })
  }


}
