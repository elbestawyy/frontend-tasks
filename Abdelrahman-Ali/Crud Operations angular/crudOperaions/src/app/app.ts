import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrudComponent } from './components/crud/crud';

@Component({
  selector: 'app-root',
  imports: [CrudComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('crudOperaions');
}
