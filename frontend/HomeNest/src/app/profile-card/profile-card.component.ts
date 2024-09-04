import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../entity/userprofile.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {

  avatar: any = "/assets/profile-pic.png";
  user: User | null = null;

  constructor(private authService: AuthService) {
    this.user = authService.user;
  };

  logOut() {
    this.authService.logout();
    
  }

}
