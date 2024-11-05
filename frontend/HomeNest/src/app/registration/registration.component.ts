import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-registration',
  imports : [ReactiveFormsModule,NgIf],
  standalone: true,
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  loginImg: string = '/assets/loginImg.png';
  registrationForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // Initialize form with validators
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNo: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      role: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    });
  }

  handleSubmit() {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    const { password, confirmPassword } = this.registrationForm.value;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const registerData = { ...this.registrationForm.value };
    delete registerData.confirmPassword; // Remove confirm password field

    if (registerData.role === 'USER' || registerData.role === 'SERVICE_PROVIDER') {
      this.authService.register(registerData).subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error(err);
          alert('Error while registering user');
        },
      });
    } else {
      alert('Invalid Role. You can only specify USER or SERVICE_PROVIDER');
    }
  }
}
