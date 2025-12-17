import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
skills = [
    { name: 'Angular', icon: '🅰️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Java', icon: '🌲' },
    { name: 'Spring Boot', icon: '🖌' },
    { name: 'Node.js', icon: '🟩' }
  ];
}
