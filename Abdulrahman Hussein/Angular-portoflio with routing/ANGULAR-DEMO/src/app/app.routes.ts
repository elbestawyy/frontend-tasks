import { Routes } from '@angular/router';
import { Landscape } from './components/landscape/landscape';
import { About } from './components/about/about';


export const routes: Routes = [
  { path: '', component: Landscape },
  { path: 'landscape', component: Landscape },
  { path: 'about', component: About },
  { path: '**', redirectTo: '' }
];
