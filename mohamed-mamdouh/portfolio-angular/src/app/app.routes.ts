import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MyServicesComponent } from './components/my-services/my-services.component';
import { ContactComponent } from './components/Contact/Contact.component';

export const routes: Routes = [
    {  path:"", component:HomeComponent ,pathMatch:"prefix"},
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: MyServicesComponent },
    { path: 'contact', component: ContactComponent },
];
