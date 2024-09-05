import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
import { RegisterModel } from '../entity/user';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule, NgIf],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  loginImg: string = "/assets/loginImg.png";

  constructor(private authService: AuthService, private router: Router){

  }
  
  registerData : RegisterModel = {
    firstName : "",
        lastName : "",
        email : "",
        password : "",
        phoneNo : "",
        role : "",
  }


  confirmPassword: string = ""
  
  handleSubmit(){

    if(this.registerData.password != this.confirmPassword){
        alert("Password Mismatch");
        return;
    }
    if(this.registerData.role=="USER"||this.registerData.role=="SERVICE_PROVIDER"){
      this.authService.register(this.registerData).subscribe({
        next: (data)=>{
          this.router.navigate(['/login']);
        },
        error: (err)=>{
          console.log(err);
          alert("Error while registering user");
        }
      })
    }else{
      alert("Invalid Role. You can only specify USER or SERVICE_PROVIDER");
      return;
    }
    
}

}
