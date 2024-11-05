import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // For now, just log the form data
    console.log(this.contactForm);
    alert('Thank you for reaching out! We will get back to you soon.');
    this.contactForm = { name: '', email: '', message: '' };  // Reset form
  }
}
