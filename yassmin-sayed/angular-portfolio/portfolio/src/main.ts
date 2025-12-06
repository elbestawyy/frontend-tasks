import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import { HeroSectionComponent } from './app/hero-section/hero-section.component'; // 👈 import component

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes)
  ],
  imports: [HeroSectionComponent]
}).catch(err => console.error(err));

