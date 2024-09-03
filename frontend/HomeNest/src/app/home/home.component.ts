import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { CategoryCardsComponent } from "../homeComponents/category-cards/category-cards.component";
import { LatestJobsComponent } from "../homeComponents/latest-jobs/latest-jobs.component";
import { TopServiceProvidersComponent } from "../homeComponents/top-service-providers/top-service-providers.component";
import { AdBlockComponent } from "../homeComponents/ad-block/ad-block.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CategoryCardsComponent, LatestJobsComponent, TopServiceProvidersComponent, AdBlockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
