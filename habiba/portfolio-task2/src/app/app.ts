import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Hero } from "./hero/hero";
import { Projects } from "./projects/projects";
import { Skills } from "./skills/skills";
import { About } from "./about/about";
import { Contact } from "./contact/contact";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Projects, Skills, About, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
