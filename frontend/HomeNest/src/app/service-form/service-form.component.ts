import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  standalone: true,
  imports: [FormsModule, NgIf],
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent {

  onSubmit(form: any): void {
    if (form.valid) {  
      console.log('Form Data:', form.value);
    }
  }
}
