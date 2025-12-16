import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
   submitForm(event: Event) {
    event.preventDefault();
    alert('Message sent successfully! (Demo only)');

}}
