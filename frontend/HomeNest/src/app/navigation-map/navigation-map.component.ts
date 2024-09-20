import { Component, AfterViewInit, Input } from '@angular/core';

declare var google: any;

@Component({
  standalone: true,
  imports: [],
  selector: 'app-navigation-map',
  templateUrl: './navigation-map.component.html',
  styleUrls: ['./navigation-map.component.css'],
})
export class NavigationMapComponent implements AfterViewInit {
  @Input() providerLocation: { lat: number; lng: number }|null=null;
  @Input() customerLocation: { lat: number; lng: number }|null=null;

  map: any;
  directionsService: any;
  directionsRenderer: any;

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(): void {
    const mapOptions = {
      center: this.providerLocation,
      zoom: 12,
    };

    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      mapOptions
    );

    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();

    this.directionsRenderer.setMap(this.map);

    this.calculateAndDisplayRoute();
  }

  calculateAndDisplayRoute(): void {
    this.directionsService.route(
      {
        origin: this.providerLocation,
        destination: this.customerLocation,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response: any, status: any) => {
        if (status === 'OK') {
          this.directionsRenderer.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      }
    );
  }
}
