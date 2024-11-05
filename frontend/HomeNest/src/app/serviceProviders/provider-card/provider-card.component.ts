import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './provider-card.component.html',
  styleUrl: './provider-card.component.css'
})
export class ProviderCardComponent implements OnInit {
  skillsArray: String[] = [];
  ngOnInit(): void {
    if(this.skills!=""){
      this.skillsArray = this.skills.split(",").map((val)=>{
        return val.trim();
      })
    }
  }
  avatar: any = "/assets/profile-pic.png";
  @Input() providerName: string = "";
  @Input() skills: string = "";
  @Input() location: string = "";
  @Input() occupation: string = "";


}
