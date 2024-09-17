import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../entity/userprofile.model';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {

  avatar: any = "/assets/profile-pic.png";
  user: User | null = null;

  constructor(private authService: AuthService,private router:Router) {
    authService.user$.subscribe(user=>{
      this.user = user;
    })
  };

  logOut() {
    this.router.navigateByUrl('/');
    this.authService.logout();
  }

}
