import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  emoji: string;
  title: string;
  description: string;
  tags: string[];
}
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = [
    {
      emoji: '🚀',
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with payment integration and real-time inventory management.',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      emoji: '📱',
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration features.',
      tags: ['Vue.js', 'Firebase', 'PWA']
    },
    {
      emoji: '🤖',
      title: 'AI Chatbot API',
      description: 'Intelligent chatbot service with natural language processing and machine learning capabilities.',
      tags: ['Python', 'TensorFlow', 'FastAPI']
    }
  ];

}
