import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
<<<<<<< HEAD
import { ServiceManagementService } from '../servicemanagement.service';
import { Service } from '../entity/services.model';
import { AuthService } from '../auth.service';
=======
>>>>>>> a457b48c56f15957796c95d9d046719853422926

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  standalone: true,
  imports: [FormsModule, NgIf],
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent {

<<<<<<< HEAD
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
=======
  onSubmit(form: any): void {
    if (form.valid) {  
      console.log('Form Data:', form.value);
    }
>>>>>>> a457b48c56f15957796c95d9d046719853422926
  }
}
