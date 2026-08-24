import { Project } from '../models/project.model';

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Omniflex Pokédex',
    description: 'A comprehensive web-based Pokédex application consuming the PokéAPI to display detailed stats, abilities, and encounter data.',
    techStack: ['Angular', 'Node.js', 'MongoDB', 'SCSS'],
    githubUrl: 'https://github.com/hp2251/omniflex',
    liveUrl: 'https://hp2251.github.io/omniflex'
  },
  {
    id: '2',
    title: 'Enterprise Server Automation',
    description: 'Developed and deployed PowerShell scripts to automate provisioning, configuration, and platform stability across a 2000+ server environment.',
    techStack: ['PowerShell', 'Windows Server', 'Automation', 'System Admin'],
    githubUrl: 'https://github.com/hp2251/server-automation'
  }
];
