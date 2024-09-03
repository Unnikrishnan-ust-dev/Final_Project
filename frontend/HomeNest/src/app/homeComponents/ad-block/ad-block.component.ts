import { Component } from '@angular/core';

@Component({
  selector: 'app-ad-block',
  standalone: true,
  imports: [],
  templateUrl: './ad-block.component.html',
  styleUrl: './ad-block.component.css'
})
export class AdBlockComponent {
  adImg: string = "/assets/adImg.png";
}
