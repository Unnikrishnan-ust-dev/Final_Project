import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceProvider } from '../entity/serviceprovider.model';
import { AuthService } from '../auth.service';
import { User } from '../entity/userprofile.model';
 
@Component({
  selector: 'app-service-provider-profile',
  templateUrl: './service-provider-profile.component.html',
  imports: [FormsModule, ReactiveFormsModule, NgFor],
  standalone: true,
  styleUrls: ['./service-provider-profile.component.css']
})
export class ServiceProviderProfileComponent implements OnInit {
  profileForm!: FormGroup;
  user : User|null = null;
 
  constructor(private fb: FormBuilder,private authService: AuthService) { }

  profileData: ServiceProvider = {
    govtIdVerified: false,
    username: '',
    id: 0,
    userId: 0,
    location: '',
    govtId: '',
    ifscCode: '',
    bankName: ''
  }
 
  ngOnInit(): void {
    this.user = this.authService.user;
    this.profileForm = this.fb.group({
      occupation: ['', Validators.required],
      skills: [''],
      education: [''],
      location: ['', Validators.required],
      govtIdType: ['', Validators.required],
      govtId: ['', Validators.required],
      bankAccountNumber: ['', Validators.required, Validators.pattern("[")],
      ifscCode: ['', Validators.required],
      bankName : ['', Validators.required],
    });
  }
 
  // get skills(): FormArray {
  //   return this.profileForm.get('skills') as FormArray;
  // }
 
  // addSkill() {
  //   this.skills.push(this.fb.control('', Validators.required));
  // }
 
  // removeSkill(index: number) {
  //   this.skills.removeAt(index);
  // }
 
  // get education(): FormArray {
  //   return this.profileForm.get('education') as FormArray;
  // }
 
  // addEducation() {
  //   this.education.push(this.fb.group({
  //     institute: ['', Validators.required],
  //     degree: ['', Validators.required],
  //     years: ['', Validators.required],
  //   }));
  // }
 
  // removeEducation(index: number) {
  //   this.education.removeAt(index);
  // }
 
  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Profile Data:', this.profileForm.value);

    }
  }
}
