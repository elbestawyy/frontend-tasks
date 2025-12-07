import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface ContactLink {
  text: string;
  url: string;
}
@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'] 
})
export class Contact {
  contactLinks: ContactLink[] = [
    { text: 'Email Me', url: '' },
    { text: 'GitHub', url: '' },
    { text: 'LinkedIn', url: '' }
  ];

}
