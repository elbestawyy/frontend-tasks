import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { initFlowbite } from 'flowbite';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, AboutComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('portfolio');
  ngOnInit(): void {
    initFlowbite();

  }

}
