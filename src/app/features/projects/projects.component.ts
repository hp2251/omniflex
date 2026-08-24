import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'project-showcase',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private projectService = inject(ProjectService);
  
  // The observable stream of your projects
  projects$!: Observable<Project[]>;

  ngOnInit(): void {
    this.projects$ = this.projectService.getProjects();
  }
}
