import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faFacebook, faLinkedin, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  logoLink = "/assets/logo-footer.png";
  twitter = faTwitter;
  linkedIn = faLinkedin;
  facebook = faFacebook;
  youtube = faYoutube;
}
