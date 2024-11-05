import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ServiceManagementService } from '../servicemanagement.service';
import { AuthService } from '../auth.service';
import { User } from '../entity/userprofile.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-service-form',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css'],
  standalone: true,
})
export class ServiceFormComponent implements OnInit {
  user: User | null = null;
  serviceForm: FormGroup;

  constructor(
    private serviceManagementService: ServiceManagementService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    // Define the form with FormBuilder and validators
    this.serviceForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      location: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.maxLength(250)]],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    // Fetch user data from AuthService
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  handleSubmit(): void {
    if (this.serviceForm.invalid) {
      this.serviceForm.markAllAsTouched();
      return;
    }

    const serviceData = { ...this.serviceForm.value, providerId: this.user?.id || 0 };

    this.serviceManagementService.addService(serviceData, this.user?.email || '').subscribe({
      next: () => {
        this.serviceForm.reset();
        alert('Successfully Created Service');
      },
      error: (err) => {
        console.error(err);
        alert('Error while creating Service!!');
      },
    });
  }
}
