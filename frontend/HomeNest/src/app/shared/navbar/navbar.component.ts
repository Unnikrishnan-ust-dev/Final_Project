import { Component, OnInit } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {faBell} from "@fortawesome/free-regular-svg-icons";
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { ProfileCardComponent } from "../../profile-card/profile-card.component";
import { AuthService } from '../../auth.service';
import { User } from '../../entity/userprofile.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, NgIf, ProfileCardComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  constructor(private authService: AuthService){}
  user: User|null = null;

  ngOnInit(): void {
    this.user = this.authService.user;
  }

  downArrow = faChevronDown;
  notificationIcon = faBell;
  logoLink = "/assets/logo.png";
  avatarLink = "/assets/profile-pic.png"
  profileDropDownPressed : boolean = false;

  openProfile(){
    this.profileDropDownPressed = !this.profileDropDownPressed;
  }
  
}
