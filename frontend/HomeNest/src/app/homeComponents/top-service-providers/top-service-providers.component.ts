import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-top-service-providers',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './top-service-providers.component.html',
  styleUrl: './top-service-providers.component.css'
})
export class TopServiceProvidersComponent {
  jobImage = "/assets/jobImage.png";
}
