import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faLocation, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-latest-jobs',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './latest-jobs.component.html',
  styleUrl: './latest-jobs.component.css'
})
export class LatestJobsComponent {
  jobImage = "/assets/jobImage.png";
  homeIcon = faHome;
  locationIcon = faLocation;
  saveIcon = faSave;
}
