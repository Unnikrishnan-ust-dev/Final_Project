import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../entity/userprofile.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements OnInit {

  constructor(private authService: AuthService) { };

  user: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    createdAt: '',
    updatedAt: ''
  };

  ngOnInit(): void {
    this.authService.getAuthenticatedUser().subscribe((data) => {
      this.user = data;
    })
  }

  handleSubmit() {
    this.authService.updateUser(this.user.id,this.user).subscribe({
      next:(data)=>{
        console.log(data);
        alert("User updated Successfully");
      },
      error: (err)=>{
        console.log(err);
        alert("Something went wrong");
      }
    })
  }

}
