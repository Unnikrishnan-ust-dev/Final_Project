import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProviderCardComponent } from "../provider-card/provider-card.component";
import { ServiceProvider } from '../../entity/serviceprovider.model';
import { ServiceProviderManagementService } from '../../serviceproviders.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [FontAwesomeModule, ProviderCardComponent,NgFor],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.css'
})
export class ProvidersComponent implements OnInit {
  serviceProviders: ServiceProvider[] = [];

  constructor(private serviceProviderService: ServiceProviderManagementService) { }

  ngOnInit(): void {
    this.loadServiceProviders();
  }

  loadServiceProviders(): void {

    this.serviceProviderService.getAllServiceProviders().subscribe((data: ServiceProvider[]) => {

      this.serviceProviders = data;
      console.log(this.serviceProviders);
    });
  }

  avatar: any = "/assets/profile-pic.png";
}
