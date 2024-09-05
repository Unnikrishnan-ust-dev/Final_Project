import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ServiceManagementService } from '../servicemanagement.service';
import { Service } from '../entity/services.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  standalone: true,
  imports: [FormsModule, NgIf],
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent {

  constructor(private serviceManagementService: ServiceManagementService, private authService: AuthService) { }

  serviceData: Service = {
    id: 0,
    name: '',
    category: '',
    description: '',
    price: 0,
    providerId: 0,
    location: ''
  }

  handleSubmit(): void {
    this.serviceManagementService.addService(this.serviceData, this.authService.user?.email ?? "").subscribe(
      {
        next: (data) => {
          this.serviceData = {
            id: 0,
            name: '',
            category: '',
            description: '',
            price: 0,
            providerId: 0,
            location: ''
          }
          alert("Successfully Created Service");
        },
        error: (err) => {
          console.log(err);
          alert("Error while creating Service!!");
        }
      }
    )
  }
}
