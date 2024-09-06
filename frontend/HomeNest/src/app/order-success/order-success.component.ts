import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-success',
  standalone: true,
  imports: [FontAwesomeModule,RouterLink],
  templateUrl: './order-success.component.html',
  styleUrl: './order-success.component.css'
})
export class OrderSuccessComponent {
  faCircle = faCheckCircle;
}
