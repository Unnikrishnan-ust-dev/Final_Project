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
    console.log(this.user);
  }

}
