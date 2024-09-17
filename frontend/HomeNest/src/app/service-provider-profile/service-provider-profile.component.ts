import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceProvider } from '../entity/serviceprovider.model';
import { AuthService } from '../auth.service';
import { User } from '../entity/userprofile.model';
import { ServiceProviderManagementService } from '../serviceproviders.service';
 
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
  serviceProviderProfile : ServiceProvider|null=null;
 
  constructor(private fb: FormBuilder,private authService: AuthService,private serviceProviderService: ServiceProviderManagementService) { }
 
  ngOnInit(): void {
    this.authService.user$.subscribe(user=>{
      this.user = user;
    })
    if(this.user!=null){
      this.serviceProviderService.getServiceProviderByUserId(this.user.id).subscribe({
        next:(data)=>{
          this.serviceProviderProfile = data;
          this.profileForm = this.fb.group({
            occupation: [this.serviceProviderProfile.occupation, Validators.required],
            skills: [this.serviceProviderProfile.skills],
            education: [this.serviceProviderProfile.education],
            location: [this.serviceProviderProfile.location, Validators.required],
            govtIdType: [this.serviceProviderProfile.govtIdType, Validators.required],
            govtId: [this.serviceProviderProfile.govtId, Validators.required],
            bankAccountNumber: [this.serviceProviderProfile.bankAccountNumber, Validators.required],
            ifscCode: [this.serviceProviderProfile.ifscCode, Validators.required],
            bankName : [this.serviceProviderProfile.bankName??"", Validators.required],
          });
        },
        error:(err)=>{
          console.log(err);
          this.profileForm = this.fb.group({
            occupation: ['', Validators.required],
            skills: [''],
            education: [''],
            location: ['', Validators.required],
            govtIdType: ['', Validators.required],
            govtId: ['', Validators.required],
            bankAccountNumber: ['', Validators.required],
            ifscCode: ['', Validators.required],
            bankName : ['', Validators.required],
          });
        }
      })
    }
    
  }
 
  onSubmit() {
    if(this.user==null){
      alert("No user");
      return;
    }
    if (this.profileForm.valid) {
      console.log(this.serviceProviderProfile);
      if(this.serviceProviderProfile!=null){
        let updateFormData : ServiceProvider = {...this.profileForm.value,id:this.serviceProviderProfile.id,userId:this.user.id};
        this.serviceProviderService.updateServiceProvider(this.serviceProviderProfile.id,updateFormData).subscribe({
          next: (data)=>{
            console.log("updated");
            alert("Profile updated successfully");
          },
          error: (err)=>{
            console.log(err);
            alert("Error while updating profile");
          }
        })
      }else{
        this.serviceProviderService.createServiceProvider(this.profileForm.value as ServiceProvider,this.user?.email).subscribe({
          next: (data)=>{
            console.log("created");
            alert("Profile created successfully");
          },
          error: (err)=>{
            console.log(err);
            alert("Error while created profile");
          }
        })
      }
      
    }
  }
}
