import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Project } from '../models/project.model';
import { MOCK_PROJECTS } from '../data/mock-projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  /**
   * Fetches all projects.
   * Future: return this.http.get('/api/projects');
   */
  getProjects(): Observable<Project[]> {
    // Optional: Adding a slight delay simulates real network latency 
    // to ensure your UI handles loading states gracefully.
    return of(MOCK_PROJECTS).pipe(delay(300));
  }

  /**
   * Fetches a single project by ID (useful if you want to build a detail page later).
   * Future: return this.http.get(`/api/projects/${id}`);
   */
  getProjectById(id: string): Observable<Project | undefined> {
    const project = MOCK_PROJECTS.find(p => p.id === id);
    return of(project).pipe(delay(300));
  }
}
