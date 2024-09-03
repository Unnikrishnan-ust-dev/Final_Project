import { Component, OnInit } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {faBell} from "@fortawesome/free-regular-svg-icons";
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule,RouterLink,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  authorized : boolean = false;

  ngOnInit(): void {
    const token = localStorage.getItem("JWT");
    if(token?.startsWith("Bearer")&&token.length>10){
      this.authorized=true;
    }
  }

  downArrow = faChevronDown;
  notificationIcon = faBell;
  logoLink = "/assets/logo.png";
  avatarLink = "/assets/profile-pic.png"

  
}
