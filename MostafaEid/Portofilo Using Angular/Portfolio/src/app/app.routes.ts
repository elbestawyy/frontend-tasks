import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.Home),
    title: 'Home | Mostafa Eid Hassan'
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects').then(
        (m) => m.Projects
      ),
    title: 'Projects | Mostafa Eid Hassan'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then(
        (m) => m.Contact
      ),
    title: 'Contact | Mostafa Eid Hassan'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
