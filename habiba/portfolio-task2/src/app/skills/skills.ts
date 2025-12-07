import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  title: string;
  items: string[];
}
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
    skills: Skill[] = [
    {
      title: 'Frontend Development',
      items: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React & Vue.js', 'Responsive Design']
    },
    {
      title: 'Backend Development',
      items: ['Node.js & Express', 'Python & Django', 'RESTful APIs', 'Database Design']
    },
    {
      title: 'Tools & Technologies',
      items: ['Git & GitHub', 'Docker & Kubernetes', 'AWS & Cloud Services', 'CI/CD Pipelines']
    }
  ];

}
