import { Component, signal } from '@angular/core';
import { RouterOutlet ,RouterLink } from '@angular/router';
import { Navbar } from "./components/navbar/navbar/navbar";
import { Footer } from "./components/Footer/footer/footer";
import { Body } from "./components/Body/body/body";

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
