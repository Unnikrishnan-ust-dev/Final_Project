import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProviderCardComponent } from "../provider-card/provider-card.component";

@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [FontAwesomeModule, ProviderCardComponent],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.css'
})
export class ProvidersComponent {
  avatar: any = "/assets/profile-pic.png";
}
