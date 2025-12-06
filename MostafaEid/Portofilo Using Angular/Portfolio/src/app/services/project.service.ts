
import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Online Learning Management System',
      description: 'A comprehensive platform for online education, featuring course management, student enrollment, and progress tracking.',
      imageUrl: '10 Strategies Featured Image.jpg',
      techStack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
    },
    {
      id: 2,
      title: 'Food Ordering System',
      description: 'A responsive web application for ordering food from local restaurants, with real-time order status updates and payment integration.',
      imageUrl: 'FOODN.jpg',
      techStack: ['Java', 'Spring MVC', 'Angular', 'MySQL', 'Stripe API'],
    },
    {
      id: 3,
      title: 'Pharmacy Management System',
      description: 'An inventory and sales management system for pharmacies, helping to manage stock, sales, and prescriptions efficiently.',
      imageUrl: 'pharma.jpg',
      techStack: ['Java', 'Spring Boot', 'Hibernate', 'AngularJS', 'Oracle DB'],
    },
    {
      id: 4,
      title: 'Real Estate System',
      description: 'A platform for listing, searching, and managing real estate properties. Includes map integration and advanced search filters.',
      imageUrl: 'https://picsum.photos/seed/realestate/600/400',
      techStack: ['Angular', 'Firebase', 'TypeScript', 'Google Maps API', 'Tailwind CSS'],
    },
    {
      id: 5,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce site with product catalogs, shopping cart, user accounts, and an admin dashboard for managing products.',
      imageUrl: 'e-comerce.jpg',
      techStack: ['Java', 'Spring Boot', 'Angular', 'MongoDB', 'AWS S3'],
    },
    {
      id: 6,
      title: 'Project Management Tool',
      description: 'A collaborative tool for teams to manage tasks, track project progress, and communicate effectively, inspired by Trello.',
      imageUrl: 'Project.jpg',
      techStack: ['Angular', 'NgRx', 'Node.js', 'Express', 'WebSocket'],
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
