import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-success',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './order-success.component.html',
  styleUrl: './order-success.component.css'
})
export class OrderSuccessComponent {
  faCircle = faCheckCircle;
}
