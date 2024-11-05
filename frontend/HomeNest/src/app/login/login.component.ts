import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginModel } from '../entity/login.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginImg: string = "/assets/loginImg.png";

  constructor(private authService: AuthService, private router: Router) { }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(8)])
  })

  handleSubmit() {
    if (!this.loginForm.valid) {
      let controls = this.loginForm.controls;
      console.log(controls);
      let errors = JSON.stringify(controls['email'].errors) ?? "" + JSON.stringify(controls['password']) ?? "";
      alert(errors);
      return;
    }
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
        alert("Error while logging in");
      }
    })

  }
}
