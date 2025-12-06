import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCard } from '../../components/project-card/project-card';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule,ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Projects {
  private projectService = inject(ProjectService);
  projects = this.projectService.getProjects();
}
