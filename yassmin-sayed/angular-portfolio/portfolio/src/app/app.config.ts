import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],

  imports: [
    HeroSectionComponent
  ]
};
