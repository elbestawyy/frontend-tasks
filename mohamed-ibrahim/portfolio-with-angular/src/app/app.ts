import { Component, signal } from '@angular/core';
import { Portfolio } from './portfolio/portfolio';

@Component({
  imports: [Portfolio],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-project');
}
