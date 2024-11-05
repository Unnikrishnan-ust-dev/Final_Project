import { Component, OnInit } from '@angular/core';
import { User } from '../entity/userprofile.model';
import { ServiceManagementService } from '../servicemanagement.service';
import { AuthService } from '../auth.service';
import { Service } from '../entity/services.model';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-service-update-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './service-update-form.component.html',
  styleUrl: './service-update-form.component.css'
})
export class ServiceUpdateFormComponent implements OnInit{
  user : User|null = null;
  serviceId : number | null = null;
  constructor(private serviceManagementService: ServiceManagementService, private authService: AuthService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.authService.user$.subscribe(user=>{
      this.user = user;
    })

    this.route.queryParamMap.subscribe(map=>{
      this.serviceId = Number.parseInt(map.get('serviceId')??"0");
      this.serviceManagementService.getServiceById(this.serviceId).subscribe({
        next: (data)=>{
          this.serviceData = data;
        },
        error: (err)=>{
          console.log(err);
          alert("Error while fetching data");
        }
      })
    })
  }

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
    this.serviceManagementService.updateService(this.serviceData).subscribe(
      {
        next: (data) => {
          alert("Successfully Updated Service");
        },
        error: (err) => {
          console.log(err);
          alert("Error while updating Service!!");
        }
      }
    )
  }
}
