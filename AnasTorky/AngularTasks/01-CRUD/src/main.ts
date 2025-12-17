import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch())
  ]
});
