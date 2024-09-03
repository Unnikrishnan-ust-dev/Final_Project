import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../servicesComponents/card/card.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { ServiceManagementService } from '../../servicemanagement.service';
import { Service } from '../../entity/services.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CardComponent,FontAwesomeModule,RouterLink,NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit{
  services : Service[] = [];
ngOnInit(): void {
  this.serviceManagementService.getAllServices().subscribe(data => {
    this.services = data;
  });
}

constructor(private serviceManagementService: ServiceManagementService){

}
serviceDetailImage: string = "/assets/serviceDetail.png";
avatar: any = "/assets/profile-pic.png";

}
