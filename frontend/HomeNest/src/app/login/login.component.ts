import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { LoginModel } from '../entity/login.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginImg: string = "/assets/loginImg.png";

constructor(private authService: AuthService, private router: Router){

}

loginData : LoginModel = {
  email : "",
  password : ""
}

handleSubmit(){

  this.authService.login(this.loginData).subscribe({
    next: (token)=>{
      // window.location.reload();
      let jwt = localStorage.getItem("token");
      
      this.router.navigate(['/']);
    },
    error: (err)=>{
      console.log(err);
    }
  })

}
}
