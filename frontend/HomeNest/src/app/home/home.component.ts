import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { CategoryCardsComponent } from "../homeComponents/category-cards/category-cards.component";
import { LatestJobsComponent } from "../homeComponents/latest-jobs/latest-jobs.component";
import { TopServiceProvidersComponent } from "../homeComponents/top-service-providers/top-service-providers.component";
import { AdBlockComponent } from "../homeComponents/ad-block/ad-block.component";
import { ServiceManagementService } from '../servicemanagement.service';
import { Service } from '../entity/services.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CategoryCardsComponent, LatestJobsComponent, TopServiceProvidersComponent, AdBlockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  services: Service[] = [];
  categories: string[] = [];
  
  constructor(
    private serviceManagementService: ServiceManagementService
  ) { }

  

  ngOnInit(): void {
    this.serviceManagementService.getAllServices().subscribe(data => {
      this.services = data;
    });
  }
}
