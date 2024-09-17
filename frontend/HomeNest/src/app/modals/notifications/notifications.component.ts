import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NgFor,FontAwesomeModule,NgIf],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  closeModal() {
    this.showModal = false;
    this.modalEvent.emit(this.showModal);
  }
  @Input() showModal:boolean = true;
  @Output() modalEvent : EventEmitter<boolean> = new EventEmitter();

  closeIcon : any = faClose;

  notifications  = [
    {title:"Notification 1",body:"First notification"},
    {title:"Notification 1",body:"First notification"},
    {title:"Notification 1",body:"First notification"},
    {title:"Notification 1",body:"First notification"},
    {title:"Notification 1",body:"First notification"},
    {title:"Notification 1",body:"First notification"},
    {title:"Notification 1",body:"First notification"},
    {title:"Notification 1",body:"First notification"},
  ]
}
