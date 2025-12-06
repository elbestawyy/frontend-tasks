import { Routes } from '@angular/router';
import { Body } from './components/Body/body/body';
import { About } from './components/About/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/Contact/contact';

export const routes: Routes = [

{path: '', component:Body },
{path: 'home', component: Body},
{path:'about', component: About},
{path:'projects',component:Projects},
{path:'contact',component:Contact}

];
