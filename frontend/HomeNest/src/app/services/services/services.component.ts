import { Component } from '@angular/core';
import { CardComponent } from "../servicesComponents/card/card.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CardComponent,FontAwesomeModule,RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
serviceDetailImage: string = "/assets/serviceDetail.png";
avatar: any = "/assets/profile-pic.png";

}
