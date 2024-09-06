import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../servicesComponents/card/card.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ServiceManagementService } from '../../servicemanagement.service';
import { Service } from '../../entity/services.model';
import { NgFor, NgIf } from '@angular/common';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { ServiceProviderManagementService } from '../../serviceproviders.service';
import { ServiceProvider } from '../../entity/serviceprovider.model';
import { FormsModule } from '@angular/forms';
import { User } from '../../entity/userprofile.model';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CardComponent, FontAwesomeModule, RouterLink, NgFor, NgIf,FormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {

  constructor(
    private serviceManagementService: ServiceManagementService,
    private authService: AuthService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  serviceDetailImage: string = "/assets/serviceDetail.png";
  avatar: any = "/assets/profile-pic.png";
  messageIcon = faMessage;

  services: Service[] = [];
  tempServices: Service[] = [];
  clickedService: Service | null = null;
  serviceProvider: ServiceProvider | null = null;
  serviceProviderBasicProfile: User|null = null;

  searchKey : string = "";

  searchData(){
    this.tempServices = this.services.filter(service =>
      (this.searchKey.trim() === '' || service.name.toLowerCase().includes(this.searchKey.toLowerCase())) &&
      (this.filterData.location === '' || service.location === this.filterData.location) &&
      (this.filterData.category === '' || service.category === this.filterData.category)
    );
  }

  getUniqueLocations(): string[] {
    return [...new Set(this.services.map(service => service.location))];
  }

  getUniqueCategories(): string[] {
    return [...new Set(this.services.map(service => service.category))];
  }

  clearFilter() {
    this.filterData = {
      location: "",
      category: ""
    }
    this.searchKey = "";
    this.tempServices = this.services;
  }

  filterData = {
    location: "",
    category: ""
  }

  ngOnInit(): void {
    this.serviceManagementService.getAllServices().subscribe(data => {
      this.services = data;
      this.tempServices = data;
      if (this.services.length > 0) {
        this.clickedService = this.services[0];
        this.authService.getUserByUserId(this.clickedService.providerId).subscribe((data) => {
          this.serviceProviderBasicProfile = data;
        })
      }
    });

    this.route.queryParamMap.subscribe((params) => {
      this.filterData.category = params.get("category")??"";
    });
  }

  changeDetailService(id: number) {
    this.clickedService = this.services.find((value)=>value.id==id)??this.services[0];
    this.authService.getUserByUserId(this.clickedService.providerId).subscribe((data) => {
      this.serviceProviderBasicProfile = data;
    })
  }

  bookService(id: number,name: string,price:number){
      if(this.serviceProviderBasicProfile!=null){
        this.router.navigate([`/checkout/${id}`],{queryParams:{name:name,price:price,providerId:this.serviceProviderBasicProfile.id}});
      }else{
        alert("Service Provider is null");
      }
  }
}
