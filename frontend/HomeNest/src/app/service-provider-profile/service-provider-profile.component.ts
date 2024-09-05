import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-service-provider-profile',
  templateUrl: './service-provider-profile.component.html',
  imports: [FormsModule, ReactiveFormsModule, NgFor],
  standalone: true,
  styleUrls: ['./service-provider-profile.component.css']
})
export class ServiceProviderProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['John Doe', Validators.required],
      occupation: ['Electrician', Validators.required],
      servicesCount: [120, [Validators.required, Validators.min(0)]],
      rating: [4.8, [Validators.required, Validators.min(0), Validators.max(5)]],
      reviews: this.fb.array([
        this.fb.group({
          customerName: ['Alice', Validators.required],
          comment: ['Great service! Very professional.', Validators.required],
          rating: [5, [Validators.required, Validators.min(0), Validators.max(5)]],
        }),
        this.fb.group({
          customerName: ['Bob', Validators.required],
          comment: ['Quick and efficient.', Validators.required],
          rating: [4.5, [Validators.required, Validators.min(0), Validators.max(5)]],
        }),
      ]),
      skills: this.fb.array([
        this.fb.control('Wiring', Validators.required),
        this.fb.control('Circuit Breaker Repair', Validators.required),
        this.fb.control('Electrical Installation', Validators.required),
      ]),
      education: this.fb.array([
        this.fb.group({
          institute: ['Technical University', Validators.required],
          degree: ['B.Tech in Electrical Engineering', Validators.required],
          years: ['2010 - 2014', Validators.required],
        })
      ])
    });
  }

  get reviews(): FormArray {
    return this.profileForm.get('reviews') as FormArray;
  }

  addReview() {
    this.reviews.push(this.fb.group({
      customerName: ['', Validators.required],
      comment: ['', Validators.required],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
    }));
  }

  removeReview(index: number) {
    this.reviews.removeAt(index);
  }

  get skills(): FormArray {
    return this.profileForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.fb.control('', Validators.required));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  get education(): FormArray {
    return this.profileForm.get('education') as FormArray;
  }

  addEducation() {
    this.education.push(this.fb.group({
      institute: ['', Validators.required],
      degree: ['', Validators.required],
      years: ['', Validators.required],
    }));
  }

  removeEducation(index: number) {
    this.education.removeAt(index);
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Profile Data:', this.profileForm.value);
      // Implement your API call or data handling logic here
    }
  }
}
