import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceManagementService } from '../../servicemanagement.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  headerImg: string = "/assets/header-img.png";
  serviceCount: number = 0;

  constructor(private serviceManagementService: ServiceManagementService) { }
  ngOnInit(): void {
    this.serviceManagementService.getAllServices().subscribe(data=>{
      this.serviceCount = data.length;
    })
  }



}
