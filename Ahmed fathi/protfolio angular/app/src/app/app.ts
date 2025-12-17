import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from './component/components/contact/contact';
import { Footer } from './component/components/footer/footer';
import { Header } from './component/components/header/header';
import { Hero } from './component/components/hero/hero';
import { Projects } from './component/components/projects/projects';
import { Skills } from './component/components/skills/skills';

@Component({
  selector: 'app-root',
  imports: [ Header, 
    Hero, 
    Skills, 
    Projects, 
    Contact, 
    Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}
