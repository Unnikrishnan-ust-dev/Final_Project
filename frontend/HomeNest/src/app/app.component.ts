import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { NotificationsComponent } from "./modals/notifications/notifications.component";
import { NavigationMapComponent } from './navigation-map/navigation-map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, NotificationsComponent,NavigationMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
closeModal($event: boolean) {
  this.showNotificationsModal = $event;
}
  showNotificationsModal: boolean = false;

  openModal(openOrClose:boolean){
    this.showNotificationsModal = openOrClose;
  }
}
