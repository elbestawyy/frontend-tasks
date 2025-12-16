import { Component } from '@angular/core';
import { Project } from '../../model/project';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
 projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce App',
      description: 'A full-stack shop built with Angular and Node.js.',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      imageUrl: 'https://via.placeholder.com/300',
      githubUrl: 'https://github.com/yourusername/project1'
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking using OpenWeather API.',
      technologies: ['React', 'API', 'Tailwind'],
      imageUrl: 'https://via.placeholder.com/300',
      githubUrl: 'https://github.com/yourusername/project2'
    }
    // Add more projects here
  ];
}
