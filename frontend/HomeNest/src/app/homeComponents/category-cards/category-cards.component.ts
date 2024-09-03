import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight, faDollarSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-cards',
  standalone: true,
  imports: [FontAwesomeModule,NgFor],
  templateUrl: './category-cards.component.html',
  styleUrl: './category-cards.component.css'
})
export class CategoryCardsComponent {
  leftArrow = faArrowAltCircleLeft;
  rightArrow = faArrowAltCircleRight;
  dollarIcon = faDollarSign;
  
  categories = [
    {title:"Teaching",jobCount:1237,cardColor:"#F5F1FE",iconBg:"#6D31ED"},
    {title:"Teaching",jobCount:1237,cardColor:"#F0F9FF",iconBg:"#15ABFF"},
    {title:"Teaching",jobCount:1237,cardColor:"#FFF0F7",iconBg:"#FF56A5"},
    {title:"Teaching",jobCount:1237,cardColor:"#FFFAE1",iconBg:"#FFD317"},
  ]
}
