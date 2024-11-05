import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { NavigationEnd, NavigationStart, Router, RouterEvent, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { ProfileCardComponent } from "../../profile-card/profile-card.component";
import { AuthService } from '../../auth.service';
import { User } from '../../entity/userprofile.model';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, NgIf, ProfileCardComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;
  constructor(private authService: AuthService, private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((data) => {
      if (this.user != null) {
        this.isAuthenticated = true;
      }
    })
  }
  user: User | null = null;

  ngOnInit(): void {
    // this.user = this.authService.user;
    this.authService.user$.subscribe(user=>{
      this.user = user;
      this.isAuthenticated = user != null;
    })
  }

  downArrow = faChevronDown;
  notificationIcon = faBell;
  logoLink = "/assets/logo-new.png";
  avatarLink = "/assets/profile-pic.png"
  profileDropDownPressed: boolean = false;
  @Input() showNotificationsModal: boolean = false;
  @Output() notificationsEvent: EventEmitter<boolean> = new EventEmitter();

  openProfile() {
    this.profileDropDownPressed = !this.profileDropDownPressed;
  }

  openNotifications() {
    this.showNotificationsModal = true;
    this.notificationsEvent.emit(this.showNotificationsModal);
  }
}
