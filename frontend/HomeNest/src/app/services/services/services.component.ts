import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../servicesComponents/card/card.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { ServiceManagementService } from '../../servicemanagement.service';
import { Service } from '../../entity/services.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CardComponent, FontAwesomeModule, RouterLink, NgFor,NgIf],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];
  clickedService: Service|null = null;

  ngOnInit(): void {
    this.serviceManagementService.getAllServices().subscribe(data => {
      this.services = data;
      if(this.services.length>0){
        this.clickedService = this.services[0]
      }
    });
  }

  constructor(private serviceManagementService: ServiceManagementService) { }

  serviceDetailImage: string = "/assets/serviceDetail.png";
  avatar: any = "/assets/profile-pic.png";

  changeDetailService(index:number){
    this.clickedService = this.services[index];
  }
}
