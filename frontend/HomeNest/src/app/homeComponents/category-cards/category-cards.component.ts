import { NgFor } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Service } from '../../entity/services.model';
import { ServiceManagementService } from '../../servicemanagement.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-cards',
  standalone: true,
  imports: [FontAwesomeModule,NgFor,RouterLink],
  templateUrl: './category-cards.component.html',
  styleUrl: './category-cards.component.css'
})
export class CategoryCardsComponent implements OnInit{
handleClick(category : string) {
  this.router.navigate(["/services"],{queryParams:{"category":category}})
}

  constructor(
    private serviceManagementService: ServiceManagementService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.serviceManagementService.getAllServices().subscribe(data => {
      this.services = data;
      this.categories = this.getUniqueCategories();
    });
  }

  leftArrow = faArrowAltCircleLeft;
  rightArrow = faArrowAltCircleRight;
  dollarIcon = faDollarSign;

  services: Service[] = [];
  categories: string[] = [];

  getUniqueCategories(): string[] {
    return [...new Set(this.services.map(service => service.category))];
  }
  
  // categories = [
  //   {title:"Teaching",jobCount:1237,cardColor:"#F5F1FE",iconBg:"#6D31ED"},
  //   {title:"Teaching",jobCount:1237,cardColor:"#F0F9FF",iconBg:"#15ABFF"},
  //   {title:"Teaching",jobCount:1237,cardColor:"#FFF0F7",iconBg:"#FF56A5"},
  //   {title:"Teaching",jobCount:1237,cardColor:"#FFFAE1",iconBg:"#FFD317"},
  // ]
}
